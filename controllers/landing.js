var player1, player2, total_score;

exports.get_landing = (req, res, next) => {
    res.render('landing', {
        title: "The Pig Game"
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
}