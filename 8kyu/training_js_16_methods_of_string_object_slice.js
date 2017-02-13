// Training JS #16: Methods of String object--slice(), substring() and substr()
// https://www.codewars.com/kata/training-js-number-16-methods-of-string-object-slice-substring-and-substr

function cutIt(arr) {
    var le = Math.min(...arr.map(w => w.length));
    return arr.map(w => w.substr(0, le));
}