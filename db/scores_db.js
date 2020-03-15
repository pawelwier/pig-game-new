var mysql = require('mysql');
var db_result;
var full_score_list = [];

var connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'Wezniesql1',
    database : 'pig_game'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to DB.');
});

function refreshScores() {
    full_score_list = [];

    connection.query('SELECT * FROM pig_game_scores', (err, rows) => {
        if (err) throw err;

        for (var i = 0; i < rows.length; i++) {
            var obj = {};
            obj.player1 = rows[i].player1;
            obj.player2 = rows[i].player2;
            obj.score1 = rows[i].score1;
            obj.score2 = rows[i].score2;
            obj.total_score = rows[i].total_score;
            var date_display = rows[i].game_date;
            obj.game_date = date_display.toString().slice(3, 24);
            full_score_list.push(obj);
        }
    });
}

function insertResults(name1, name2, score1, score2, score_total, date) {
    var post = {
        player1 : name1,
        player2 : name2,
        score1 : score1,
        score2 : score2,
        total_score : score_total,
        game_date : date
    }

    connection.query('INSERT INTO pig_game_scores SET ?', post, (err, res) =>{
        console.log("Inserted data " + res);
    });

}

refreshScores();

module.exports.test_data = db_result;
module.exports.insertResults = insertResults;
module.exports.full_score_list = full_score_list;
module.exports.refreshScores = refreshScores;
