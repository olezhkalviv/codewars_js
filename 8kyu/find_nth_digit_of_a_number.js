// Find n'th Digit of a Number
// https://www.codewars.com/kata/find-nth-digit-of-a-number

var findDigit = function(num, nth){
    num = Math.abs(num).toString().split('');
    return nth <= 0 ? -1 : +num[num.length - nth] ? +num[num.length - nth] : 0;
}