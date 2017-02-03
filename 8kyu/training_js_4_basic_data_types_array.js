// Training JS #4: Basic data types--Array
// https://www.codewars.com/kata/training-js-number-4-basic-data-types-array

function getLength(arr) {
    return arr.length;
}

function getFirst(arr) {
    return arr[0];
}

function getLast(arr) {
    return arr[arr.length - 1];
}

function pushElement(arr) {
    var el = 1;
    arr.push(el);
    return arr;
}

function popElement(arr) {
    arr.pop();
    return arr;
}