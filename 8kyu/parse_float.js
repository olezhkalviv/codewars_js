// Parse float
// https://www.codewars.com/kata/parse-float

function parseF(s) {
    return typeof s == 'boolean' || isNaN(s) ? null : +s;
}