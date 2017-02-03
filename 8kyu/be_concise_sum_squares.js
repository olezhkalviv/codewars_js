// Be Concise III - Sum Squares
// https://www.codewars.com/kata/be-concise-iii-sum-squares

function sumSquares(array) {
    return array.map(n => n ** 2).reduce((a, b) => { return a + b; });
}