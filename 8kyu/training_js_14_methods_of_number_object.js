// Training JS #14: Methods of Number object--toString() and toLocaleString()
// https://www.codewars.com/kata/training-js-number-14-methods-of-number-object-tostring-and-tolocalestring

function colorOf(r, g, b) {
    return '#' + (r < 16 ? "0" : "") + r.toString(16) + (g < 16 ? "0" : "") + g.toString(16) + (b < 16 ? "0" : "") + b.toString(16);
}