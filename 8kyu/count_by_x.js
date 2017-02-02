// Count by X
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
  var z = [];
  for (i = 0; i < n; i++) {
    z[i] = i * x + x;
  }
  return z;
}