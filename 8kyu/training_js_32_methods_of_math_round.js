// Training JS #32: methods of Math---round() ceil() and floor()
// https://www.codewars.com/kata/training-js-number-32-methods-of-math-round-ceil-and-floor

function roundIt(n){
    var s = `${n}`;
    var a = s.split('.');
    return a[0].length > a[1].length ? Math.floor(n) : a[1].length > a[0].length ? Math.ceil(n) : Math.round(n);
}