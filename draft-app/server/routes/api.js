const express = require('express');
const router = express.Router();

const db = require('../../db.js');



//const mongodb = require('mongodb').MongoClient;
//const mongoUrl = 'mongodb://localhost:27017/draft2017';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/quarterbacks', (req, res) => {
    db.getQBs(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            return res.status(200).json(data);
        }
    });
});

router.get('/runningbacks', (req, res) => {
    db.getRBs(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            return res.status(200).json(data);
        }
    });
});

router.get('/widereceivers', (req, res) => {
    db.getWRs(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            return res.status(200).json(data);
        }
    });
});

router.get('/tightends', (req, res) => {
    db.getTEs(function(err, data) {
        if (err) {
            console.log(err);
            return res(err);
        } else {
            return res.status(200).json(data);
        }
    });
});

router.put('/draft', (req, res) => {
    //console.log("found draft route, req body: ", req.body);
    const pos = req.body.position;
    const playerId = req.body.playerId;
    const wasDrafted = req.body.drafted;
    console.log(pos, playerId, wasDrafted);
    db.draftPlayer(pos, playerId, wasDrafted, (err, result) => {
        //console.log(result);
        if(err) return res.send(err);
        return res.send(result);
    });
});

router.get('/salaries/:position/contest/:contestName', (req, res) => {
    console.log(req.params);
    var position = req.params.position;
    db.getPlayersForContest(req.params.position, req.params.contestName, (err, data) => {
        if(err){
            console.log(err);
            return res(err);
        } else {
            return res.status(200).json(data);
        }
    });
});

router.put('/scoreSalary', (req, res) => {
    db.assignSalaryScore(req.body.position, req.body.playerId, req.body.contest, req.body.score, (err, result) => {
        if(err) return res.send(err);
        return res.send(result);
    });
});



module.exports = router;