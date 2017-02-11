// Find the Remainder
// https://www.codewars.com/kata/find-the-remainder

function remainder(a, b){
    return !a || !b ? NaN : a > b ? a % b : b % a;
}