// Filling an array (part 1)
// https://www.codewars.com/kata/filling-an-array-part-1

const arr = N => N > 0 ? Array.from(Array(N), (e, i) => e = i) : [];