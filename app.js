const player1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1scoreboard'),
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2scoreboard')
}

const resetscore = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')

let winningScore = 3;
let isGameOver = false;


function update(player, opponents) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponents.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponents.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

player1.button.addEventListener('click', function () {
    update(player1, player2);
})

player2.button.addEventListener('click', function () {
    update(player2, player1);
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetscore.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}