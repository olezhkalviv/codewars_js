// Training JS #34: methods of Math---pow() sqrt() and cbrt()
// https://www.codewars.com/kata/training-js-number-34-methods-of-math-pow-sqrt-and-cbrt

function cutCube(volume, n) {
    return Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume / n));
}