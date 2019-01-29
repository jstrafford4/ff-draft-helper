var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

let positionUrls = {
    'qb': 'https://www.stats.com/industry-analysis-articles/2017-fantasy-football-preview-qb/',
    'rb': 'https://www.stats.com/industry-analysis-articles/stats-2017-fantasy-football-preview-running-backs/',
    'wr': 'https://www.stats.com/industry-analysis-articles/stats-2017-fantasy-football-wide-receivers/',
    'te': 'https://www.stats.com/industry-analysis-articles/stats-2017-fantasy-football-preview-tight-ends/'
    //'spt': 'https://www.stats.com/industry-analysis-articles/stats-2017-fantasy-football-preview-kickers-defense/'
};

// NOTE: consider just assigning tiers as properties and use players array for future scraping

for (const position of Object.keys(positionUrls)) {

    console.log(`Starting position ${position}, url: ${positionUrls[position]}`);

    request(positionUrls[position], function (error, response, html) {
        if (error) {
            console.log("Error!");
            console.log(error);
            console.log("Error during request for " + position);
            return false;
        }

        //let tiers = [];
        let players = [];
        let positionRank = 1;
        let currentTier = 0;

        var $ = cheerio.load(html);

        // Tiers and player ranks are <strong> elements
        $('strong').filter(function () {
            var strongText = $(this).text();
            if (strongText.startsWith('Tier ')) {
                currentTier = parseInt(strongText.substring(5));
            } else {
                let name = null;
                if( position === 'qb' ){
                    name = strongText;
                } else {
                    var dashIndex = strongText.indexOf(' – ');
                    if(dashIndex > 0){
                        name = strongText.substring(0, dashIndex);
                    }
                }
                if(name === null){
                    console.log(`Skipping text : ${strongText}`);
                    return false;
                }
                var numSpacesInName = name.split(' ').length - 1;
                // regex checks that name isn't just empty or whitespace
                if ((/\S/.test(name)) && (numSpacesInName === 1 || numSpacesInName === 2)) {
                    console.log("player?", name);
                    const player = {
                        'tier': currentTier,
                        'positionRank': positionRank++,
                        'name': name.trim()
                    };
                    players.push(player);
                } else {
                    console.log(`not player! \'${strongText}\' --> \'${name}\'`);
                }
            }
        });

        console.log(`We found tiers!`);
        if (players.length > 0) {
            const fileName = position + '3.json';
            fs.writeFile(fileName, JSON.stringify({ 'players': players}, null, 4), function (err) {
                if (err) {
                    console.log(`Error writing to json!  Position: ${position}`);
                    console.log(err);
                    console.log("^^ hey that was the json error.  look into logging later");
                } else {
                    console.log(`File successfully written! - Check your project directory for the ${position}.json file`);
                }
            });
        } else {
            console.log('No tiers found for position ' + position);
        }
    });
}