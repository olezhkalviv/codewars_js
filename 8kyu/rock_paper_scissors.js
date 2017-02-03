// Rock Paper Scissors!
// https://www.codewars.com/kata/rock-paper-scissors

const rps = (p1, p2) => {
	var win = [['paper', 'rock'], ['rock', 'scissors'], ['scissors', 'paper']]
	return p1 == p2 ? 'Draw!'
	: win.some(w => w[0] == p1 && w[1] == p2) ? 'Player 1 won!' : 'Player 2 won!';
};