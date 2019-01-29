var mongodb = require('mongodb').MongoClient;
var fs = require('fs');

var url = 'mongodb://localhost:27017/draft2017';

var positions = [
    'qb'
    //'rb',
    //'wr',
    //'te'
];

var db = null;

mongodb.connect(url, function (err, database) {
    db = database;
    for(let position of positions){

        const lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(position + 's.txt')
        });

        lineReader.on('line', function (line) {
            //var nameEnd = line.indexOf(' (');
            //var name = line.substring(0, nameEnd);
            //var otherFields = line.substring(nameEnd+4).trim().split(/\s+/);
            //var ratio = otherFields[2];

            //qb special
            var spaceSplit = line.split(/\s+/);
            var name = spaceSplit[0] + ' ' + spaceSplit[1];
            var ratio = spaceSplit[4];
            //console.log(name, ratio);
            updateRatio(name, ratio, position);
            //var player = {
            //    'name': name,
            //    'ratio': ratio
            //};
            //console.log(player);
        });
    }

    setTimeout(function () {
        db.close();
    }, 6000);
});

function updateRatio(name, ratio, position){
    db.collection(position).updateOne({displayName:name}, {$set:{'ratio':ratio}}, function (err){
        if(err){
            console.log("Update Error for ", name);
        }
    });
}
