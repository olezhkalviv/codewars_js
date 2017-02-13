// Area of a Square (Easy)
// https://www.codewars.com/kata/area-of-a-square-easy

function squareArea(A) {
    var r = (A * 4) / (2 * Math.PI);
    return +(r * r).toFixed(2);
}