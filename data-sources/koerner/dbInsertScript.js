var mongodb = require('mongodb').MongoClient;
var fs = require('fs');

var url = 'mongodb://localhost:27017/draft2017';
var positions = [
    'qb'
    //'rb',
    //'wr',
    //'te',
    //'k', 
    //'def'
];

var erroredPlayers = [];

/*
mongodb.connect(url, function (err, db) {
    for (let position of positions) {

        console.log(`Starting position ${position}`);
        var fileName = position + '.json';
        var obj = JSON.parse(fs.readFileSync(fileName, 'utf8'));
        console.log(`Found ${obj.tiers.length} tiers.`);
        if (!obj.tiers.length) {
            break;
        }

        let collection = db.collection(position);

        // yeah this tier structure is weird, try something new next time
        for (let tier of obj.tiers) {
            let count = 0;
            for (let player of tier.players) {
                const tierNumber = tier.tier; // ..I know
                collection.updateOne({
                        displayName: player.name
                    }, {
                        $set: {
                            rankings: {
                                koerner: {
                                    tier: tierNumber,
                                    posRank: player.positionRank
                                }
                            }
                        }
                    },
                    null,
                    function (error, result) {
                        count++;
                        if (error) {
                            console.log("error updating player ", player.name);
                            errorPlayers.push(player);

                        }
                        if (count == tier.players.length) {
                                console.log(`done with all ${tier.players.length} players in tier ${tier.tier}`);
                        }
                    }
                );
            }

        }
        console.log("executed position ", position);



    }

    setTimeout(function () {
        console.log("I don't think I did the async stuff well this time.  Keep learning!");
        if(erroredPlayers.length){
            console.log('All errored players:');
            console.log(erroredPlayers);

        }
        db.close();
    }, 6000);

});*/

mongodb.connect(url, function (err, db) {
    
    for (let position of positions) {

        console.log(`Starting position ${position}`);
        var fileName = position + '3.json';
        var obj = JSON.parse(fs.readFileSync(fileName, 'utf8'));
        console.log(`Found ${obj.players.length} players`);
        if (!obj.players.length) {
            break;
        }

        const allNames = obj.players.map(function (p) {
            return p.name.trim();
        });
        //console.log(allNames);

        const p = position.toString();
        let collection = db.collection(p);

        collection.find({displayName: { $in: allNames }}).forEach(function (doc) {
            //console.log(doc.displayName);
            var player = obj.players.find(function (p){
                const itsHim = p.name.toUpperCase() == doc.displayName.toUpperCase();
                if(itsHim){
                    p.found = true;
                    return true;
                }
                return false;
            });
            
            //console.log("player:", player);
            doc.rankings = {
                "koerner": {
                    "tier": player.tier,
                    "posRank": player.positionRank
                }
            };
            collection.save(doc);
        });


    }

    setTimeout(function () {
        console.log("I don't think I did the async stuff well this time.  Keep learning!");
        if(erroredPlayers.length){
            console.log('All errored players:');
            console.log(erroredPlayers);

        }

        
        db.close();
        const didntFind = obj.players.find(function (p) {
            return !p.found;
        });
        console.log("didn't Find: ");
        console.log(didntFind);
    }, 10000);

});