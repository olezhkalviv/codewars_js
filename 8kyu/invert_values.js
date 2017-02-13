// Invert values
// https://www.codewars.com/kata/invert-values

function invert(array) {
    return array.map(n => n == 0 ? 0 : -n);
}