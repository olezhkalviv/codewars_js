// Get the lost toString back
// https://www.codewars.com/kata/561abc8d324728b06e000102

var _originalToString = function(func) {
  return Function.prototype.toString.call(func);
};