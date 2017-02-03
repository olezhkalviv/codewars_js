// Multiply the number
// https://www.codewars.com/kata/multiply-the-number

function multiply(number) {
    var len = (number + '').replace('-', '').length;
    return number * Math.pow(5, len);
}