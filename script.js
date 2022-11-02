'use strict';

var scores, currentScore, activePlayer, gamePlaying;
init();

var diceDOM = document.querySelector('.dice');

document.querySelector('.btn--roll').addEventListener('click', function () {
	if (!gamePlaying) return;

	var dice = Math.floor(Math.random() * 6) + 1;
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	if (dice !== 1) {
		currentScore += dice;
		document.getElementById('current--' + activePlayer).textContent = currentScore;
	} else {
		nextPlayer();
	}
});

document.querySelector('.btn--hold').addEventListener('click', function () {
	if (!gamePlaying) return;
	
	scores[activePlayer] += currentScore;
	document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];
	if (scores[activePlayer] >= 20) {
		document.getElementById('name--' + activePlayer).textContent = 'Winner!';
		diceDOM.style.display = 'none';
		document.querySelector('.player--' + activePlayer).classList.add('player--winner');
		document.querySelector('.player--' + activePlayer).classList.remove('player--active');
		gamePlaying = false;
	} else {
		nextPlayer();

	}
});

function nextPlayer() {
	activePlayer = activePlayer === 0 ? 1 : 0;
	currentScore = 0;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('current--0').textContent = 0;
	document.getElementById('current--1').textContent = 0;
	document.querySelector('.player--0').classList.toggle('player--active');
	document.querySelector('.player--1').classList.toggle('player--active');
}

document.querySelector('.btn--new').addEventListener('click', init);

function init() {
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score--0').textContent = 0;
	document.getElementById('score--1').textContent = 0;
	document.getElementById('current--0').textContent = 0;
	document.getElementById('current--1').textContent = 0;
	document.getElementById('name--0').textContent = 'Player 1';
	document.getElementById('name--1').textContent = 'Player 2';
	document.querySelector('.player--0').classList.remove('player--winner');
	document.querySelector('.player--1').classList.remove('player--winner');
	document.querySelector('.player--0').classList.remove('player--active');
	document.querySelector('.player--1').classList.remove('player--active');
	document.querySelector('.player--0').classList.add('player--active');
}