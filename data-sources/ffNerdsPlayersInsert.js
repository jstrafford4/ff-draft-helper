var mongodb = require('mongodb').MongoClient;
var fs = require('fs');

var url = 'mongodb://localhost:27017/dk';
var positions = [
    'qb', 
    'rb',
    'wr', 
    'te', 
    'k', 
    'def'
];

let count = 0;
mongodb.connect(url, function (err, db) {
    insertPlayers(positions, 0, db);
});

function insertPlayers(positions, posIndex, db){
    if(posIndex >= positions.length){
        console.log("All Positions Completed");
        db.close();
        return;
    }
    const position = positions[posIndex];
    var fileName = 'ffn/players/' + position.toUpperCase() + '.json';
    players = JSON.parse(fs.readFileSync(fileName, 'utf8')).Players;
    db.collection(position).insertMany(players,
        function (err, results) {
            if(err){
                console.log(err);
                db.close();
                return;
            } else {
                console.log(position, "completed");
            }
            insertPlayers(positions, posIndex+1, db);
        });
}

