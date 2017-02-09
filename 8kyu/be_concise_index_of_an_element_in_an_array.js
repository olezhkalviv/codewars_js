// Be Concise IV - Index of an element in an array
// https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array

function find(array, element) {
    var i = array.findIndex((e) => { return e == element; })
    return i >= 0 ? i : "Not found";
}