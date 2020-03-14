console.log("game is on");

var roll_button = document.getElementById('roll_dice');
var score_1 = document.getElementById('score1');

var throw_dice = Math.floor(Math.random() * 6) + 1;

roll_button.addEventListener('click', () => {
    console.log('click');
    score_1 = throw_dice;
});