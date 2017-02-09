// Calculate average
// https://www.codewars.com/kata/calculate-average

function find_average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}