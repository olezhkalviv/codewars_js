// Find the Slope
// https://www.codewars.com/kata/find-the-slope

function slope(points) {
    return points[2] == points[0] ? "undefined" : `${(points[3] - points[1]) / (points[2] - points[0])}`;
}