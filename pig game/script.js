'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const Score0El = document.getElementById('score--0');
const Score1El = document.getElementById('score--1');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const diceEl = document.querySelector('.dice');


function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
let playing, scores, currentScore, activePlayer;

function resetovanje() {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  diceEl.classList.add('hidden');

  playing = true;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  Score0El.textContent = 0;
  Score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
};

resetovanje();

//Start

btnRoll.addEventListener('click', function () {
  if (playing) {
    let diceScore = Math.trunc(Math.random() * 6) + 1;
    console.log(diceScore);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceScore}.png`;
    // Zamena igraca
    if (diceScore !== 1) {
      currentScore += diceScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else switchPlayer();
  }
});

btnNew.addEventListener('click', resetovanje);
