// A function within a function
// https://www.codewars.com/kata/53844152aa6fc137d8000589

function always(n) {
  var fun = function () {
    return n;
  }
  return fun;
}