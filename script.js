'use strict';

var scores, currentScore, activePlayer;

scores = [0, 0];
currentScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
	var dice = Math.floor(Math.random() * 6) + 1;
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	document.getElementById('current--' + activePlayer).textContent += dice;
	if (dice === 1) {
		if (activePlayer === 0)
			activePlayer = 1;
		else
			activePlayer = 0;
	}
});
