// Finish Guess the Number Game
// https://www.codewars.com/kata/finish-guess-the-number-game

class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }

    guess(n) {
        if (this.lives == 0) throw new Exception();
        return n == this.number ? true : (() => { this.lives--; return false; })();
    }
}