// Fix the Bugs (Syntax) - My First Kata
// https://www.codewars.com/kata/fix-the-bugs-syntax-my-first-kata

function myFirstKata(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        return false;
    }
    return a % b + b % a;
}