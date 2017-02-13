// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
// https://www.codewars.com/kata/training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search

function firstToLast(str, c) {
    return str.indexOf(c) == -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}