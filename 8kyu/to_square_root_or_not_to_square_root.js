// To square(root) or not to square(root)
// https://www.codewars.com/kata/to-square-root-or-not-to-square-root

function squareOrSquareRoot(array) {
    return array.map(n => Math.sqrt(n) % 1 ? Math.pow(n, 2) : Math.sqrt(n));
}