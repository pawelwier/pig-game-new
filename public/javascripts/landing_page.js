document.getElementById("go_to_scores").addEventListener("click", () => {
    window.location.href = '/scores';
});

document.getElementById('start_game').addEventListener('click', (e) => {
    if (document.getElementById('player_input1').value == '' || document.getElementById('player_input2').value == '') {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert('Wpisz graczy');
        return false;
        
    }
});