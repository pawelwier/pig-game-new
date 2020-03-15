var mysql = require('mysql');
var db_result;

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

connection.query('SELECT * FROM pig_game_scores', (err, rows) => {
    if (err) throw err;
    db_result = rows;
    console.log('Data from db: ' + rows);
});
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

    connection.end((err) => {
        console.log('Finished with grace');
    });
}

module.exports.test_data = db_result;
module.exports.insertResults = insertResults;
