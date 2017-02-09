// Double Char
// https://www.codewars.com/kata/double-char

function doubleChar(str) {
    return str.split('').map(c => c += c).join('');
}