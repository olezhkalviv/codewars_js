// Add Length
// https://www.codewars.com/kata/559d2284b5bb6799e9000047

function addLength(str) {
  return str.split(' ').map(s => s + ' ' + s.length);
}