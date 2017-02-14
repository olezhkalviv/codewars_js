// No zeros for heros
// https://www.codewars.com/kata/no-zeros-for-heros

function noBoringZeros(n) {
    return n == 0 ? 0 : +(n.toString().replace(/[0]+$/, ''));
}