// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// https://www.codewars.com/kata/training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision


function howManySmaller(arr, n) {
    return arr.map(d => d.toFixed(2)).filter(d => d < n).length;
}