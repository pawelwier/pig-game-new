var player1, player2, score1, score2, total_score;

var db_res = require('../db/scores_db');

exports.get_landing = (req, res, next) => {
    res.render('landing', {
        title: "Pig game"
    })
};

exports.post_landing = (req, res, next) => {
    res.redirect('/game');
    player1 = req.body.player1;
    player2 = req.body.player2;
    total_score = req.body.total_score;
};

exports.get_game_main = (req, res, next) => {
    res.render('game_main', {
        player1 : player1,
        player2 : player2,
        total_score : total_score || 50
    });
    console.log('asdf');
};

exports.post_game_scores = (req, res, next) => {
    var p1 = player1;
    var p2 = player2;
    var sc1 = parseInt(req.body.score0_export);
    var sc2 = parseInt(req.body.score1_export);
    var tot = parseInt(total_score);
    var d = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var addResults = db_res.insertResults;
    addResults(p1, p2, sc1, sc2, tot, d);
    console.log("SC1: " + req.body.score0_export);
    console.log("SC2: " + req.body.score1_export);
    res.redirect('back');
};