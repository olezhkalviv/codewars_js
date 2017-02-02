// Grasshopper - Array Mean
// https://www.codewars.com/kata/55d277882e139d0b6000005d

var findAverage = function (nums) {
  var sum = nums.reduce(function(a, b) { return a + b; });
  return sum / nums.length;
}