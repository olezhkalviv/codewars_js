// Localize The Barycenter of a Triangle
// https://www.codewars.com/kata/localize-the-barycenter-of-a-triangle

function barTriang(p1, p2, p3) {
    var x = parseFloat(((p1[0] + p2[0] + p3[0]) / 3).toFixed(4));
    var y = parseFloat(((p1[1] + p2[1] + p3[1]) / 3).toFixed(4));
    return [x, y];
}