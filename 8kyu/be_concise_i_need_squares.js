// Be Concise II - I Need Squares
// https://www.codewars.com/kata/be-concise-ii-i-need-squares

var squaresOnly = (a) => {
    return a.filter(n => Math.pow(Math.floor(Math.sqrt(n)), 2) == n);
}