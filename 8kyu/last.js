// Last
// https://www.codewars.com/kata/last

function last(...list) {
    return Array.isArray(list[0]) || (list.length == 1 && typeof list[0] == 'string') ? list[0][list[0].length - 1] : list[list.length - 1];
}