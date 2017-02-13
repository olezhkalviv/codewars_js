// Arguments to Binary addition
// https://www.codewars.com/kata/arguments-to-binary-addition/

function arr2bin(arr) {
    return arr.map(a => typeof a == 'number' ? a : 0).reduce((sum, n) => sum + n, 0).toString(2);
}