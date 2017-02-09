// Training JS #13: Number object and its properties
// https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties

function whatNumberIsIt(n){
    return isNaN(n) ? "Input number is Number.NaN" :
        n === Number.MAX_VALUE ? "Input number is Number.MAX_VALUE" : 
        n === Number.MIN_VALUE ? "Input number is Number.MIN_VALUE" :
        n === Number.NEGATIVE_INFINITY ? "Input number is Number.NEGATIVE_INFINITY" : 
        n === Number.POSITIVE_INFINITY ? "Input number is Number.POSITIVE_INFINITY" :
        `Input number is ${n}`;
}