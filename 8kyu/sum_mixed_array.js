// Sum Mixed Array
// https://www.codewars.com/kata/sum-mixed-array

function sumMix(x) {
    return x.map(n => parseInt(n)).reduce((sum, n) => sum + n);
}