var player1, player2, total_score, scores_db_full;

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
    res.redirect('back');
};

exports.get_scores_history = (req, res, next) => {

    db_res.refreshScores();

    res.render("score_history", {
        scores : db_res.full_score_list
    });
};