// Improving Math.round(x)
// https://www.codewars.com/kata/56be025f9347a066c7000e4f

Math.roundTo = function (number, precision) {
  var x = Math.pow(10, precision);
  return Math.round(number * x) / x;
}