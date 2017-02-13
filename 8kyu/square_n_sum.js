// Square(n) Sum
// https://www.codewars.com/kata/square-n-sum

function squareSum(numbers) {
    return numbers.map(n => Math.pow(n, 2)).reduce((sum, n) => sum + n);
}