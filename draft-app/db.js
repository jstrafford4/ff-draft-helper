const mongodb = require('mongodb').MongoClient;

var db;
var exports = {};
const url = 'mongodb://localhost:27017/dk';
mongodb.connect(url, (err, database) => {
    db = database;
    console.log("CONNECTED and set db...");
});

exports.getQBs = function (callback) {
    return db.collection('qb').find({rankings: { $exists: true}}).sort({"rankings.koerner.posRank":1}).toArray(callback);
};

exports.getRBs = function (callback) {
    return db.collection('rb').find({rankings: { $exists: true}}).sort({"rankings.koerner.posRank":1}).toArray(callback);
};

exports.getWRs = function (callback) {
    return db.collection('wr').find({rankings: { $exists: true}}).sort({"rankings.koerner.posRank":1}).toArray(callback);
};

exports.getTEs = function (callback) {
    return db.collection('te').find({rankings: { $exists: true}}).sort({"rankings.koerner.posRank":1}).toArray(callback);
};

exports.draftPlayer = function (position, playerId, wasDrafted, callback) {
    console.log(`in db.js, playerId ${playerId} wasDrafted ${wasDrafted}`);
    db.collection(position.toLowerCase()).update({'playerId':playerId}, {
        $set: {
            'wasDrafted': wasDrafted
        }
    }, callback);
};

exports.getPlayersForContest = function (position, contest, callback) {
    var contestObj = {};
    contestObj[contest] = { $exists: true };
    var sortObj = {};
    sortObj[contest + '.salary'] = -1;
    return db.collection(position.toLowerCase()).find(contestObj).sort(sortObj).toArray(callback);
};

exports.assignSalaryScore = function (position, playerId, contest, score, callback){
    var scoreObj = {};
    scoreObj[contest + '.score'] = score;
    db.collection(position.toLowerCase()).update({'playerId':playerId}, {
        $set: scoreObj
    }, callback);
};





module.exports = exports;




