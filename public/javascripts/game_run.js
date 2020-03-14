// console.log("game is on");

// var roll_button = document.getElementById('roll_dice');
// var score_1 = document.getElementById('score1');

// var throw_dice = Math.floor(Math.random() * 6) + 1;

// roll_button.addEventListener('click', () => {
//     console.log('click');
//     score_1 = throw_dice;
// });

var scores, roundScore, activePlayer, maxScore;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

maxScore = parseInt(document.getElementById('total_points').textContent);

// document.querySelector('#current-' + activePlayer).innerHTML = '<b>' + dice + '</b>';
//document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('.dice').style.display = 'none';
document.querySelector('#winnerFrame').style.display = 'none';
document.querySelector('#dice_current').style.display = 'none';

document.querySelector('#name0').style.fontWeight = 'bold';

document.getElementById('score0').textContent = 0;
document.getElementById('score1').textContent = 0;
document.getElementById('current0').textContent = 0;
document.getElementById('current1').textContent = 0;

var x = 0;
var y = 0;
var x_zero = 0;
var y_zero = 0;
// var diceDOM = document.querySelector('.dice');
var winnerFrame = document.querySelector('#winnerFrame');
var buttons = document.querySelector('.buttons');
var winnerText = document.querySelector('#winner');
// var winnerImg = document.querySelector('#winnerImg');
var showOne = document.getElementById("one_point");
var diceCurrent = document.querySelector('#dice_current');

showOne.style.display = 'none';

function switchBold() {
    document.querySelector('#name' + activePlayer).style.fontWeight = 'bold';
    var inactivePlayer = (activePlayer == 0) ? 1 : 0;
    document.querySelector('#name' + inactivePlayer).style.fontWeight = 'normal';
    
}

function setActiveAgain(){

    document.getElementById("roll_dice").disabled = false;
    document.getElementById("hold").disabled = false;
    showOne.style.display = 'none';
    document.querySelector('#dice_current').textContent = '';
    switchBold();
}


document.querySelector('#roll_dice').addEventListener('click', () => {

    var dice = Math.floor(Math.random() * 6) + 1;

    diceCurrent.style.display = 'inline-block';
    document.querySelector('#dice_current').textContent = dice;
    
    // diceDOM.style.display = 'block';
    // diceDOM.src = 'dice-' + dice + '.png';

    if (dice == 1) {
        x = 0;
        document.querySelector('#current' + activePlayer).textContent = 0;
        activePlayer = (activePlayer == 0) ? 1 : 0;

        document.getElementById("roll_dice").disabled = true;
        document.getElementById("hold").disabled = true;
        showOne.style.display = 'inline-block';


        setTimeout(setActiveAgain, 1200); 

    } else {
        
    

    x += dice

    document.querySelector('#current' + activePlayer).textContent = x;
    }
});

document.getElementById('hold').addEventListener('click', () => {
    document.querySelector('#current' + activePlayer).textContent = 0;
    document.querySelector('#dice_current').textContent = '';
    y += x;

    if (activePlayer == 0) {x_zero += y;
    document.getElementById('score'  + activePlayer).textContent = x_zero;}

    if (activePlayer == 1) {y_zero += y;
        document.getElementById('score'  + activePlayer).textContent = y_zero;}

    if (y_zero >= maxScore || x_zero >= maxScore) {
            winnerFrame.style.display = 'block';
            winner.textContent = 'Wygral gracz nr ' + (activePlayer + 1);
            buttons.style.display = 'none';
           // winnerImg.style.width = '200px';
            // winnerImg.style.display = 'block';
            // winnerImg.src = 'img-' + activePlayer + '.jpg';
    }

    activePlayer = (activePlayer == 0) ? 1 : 0;

    x = 0;
    y = 0;

    // diceDOM.style.display = 'none';

    switchBold()
});

document.getElementById('newGame').addEventListener('click', () => {
    location.reload();
});