// Training JS #21: Methods of String object--trim() and the string template
// https://www.codewars.com/kata/training-js-number-21-methods-of-string-object-trim-and-the-string-template

function fiveLine(s) {
    s = s.trim();
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}