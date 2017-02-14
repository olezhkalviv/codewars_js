// Removing Elements
// https://www.codewars.com/kata/removing-elements

function removeEveryOther(arr) {
    return arr.filter((x, i) => { return i % 2 == 0; });
}