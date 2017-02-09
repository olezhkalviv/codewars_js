// Powers of 2
// https://www.codewars.com/kata/powers-of-2/javascript

function powersOfTwo(n) {
    return Array.from({ length: n + 1 }, (e, i) => 2 ** i);
}