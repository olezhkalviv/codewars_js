// Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of

function giveMeFive(obj) {
    var arr = [];
    for (key in obj) {
        if (key.length == 5) {
            arr.push(key);
        }
        if (obj[key].length == 5) {
          arr.push(obj[key]);
        }
    }
    return arr;
}