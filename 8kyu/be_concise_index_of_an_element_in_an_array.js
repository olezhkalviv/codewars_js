// Be Concise IV - Index of an element in an array
// https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array

var find = (a, e) => {
    var i = a.indexOf(e);
    return i >= 0 ? i : "Not found";
}