// Training JS #10: loop statement --for
// https://www.codewars.com/kata/training-js-number-10-loop-statement-for

function pickIt(arr) {
    var odd = [], even = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [odd, even];
}