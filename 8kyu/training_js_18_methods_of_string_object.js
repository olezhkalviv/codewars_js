// Training JS #18: Methods of String object--concat() split() and its good friend join()
// https://www.codewars.com/kata/training-js-number-18-methods-of-string-object-concat-split-and-its-good-friend-join

function splitAndMerge(str, sp) {
    return str.split(' ').map(w => w.split('').join(sp)).join(' ');
}