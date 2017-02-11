// Playing with cubes II
// https://www.codewars.com/kata/playing-with-cubes-ii

function Cube(n) {
  var side = n || 0;
  this.getSide = function() { return side; };
  this.setSide = function(n) {
    if (isNaN(n) === true) { return; }
    side = Math.abs(n);
  };
};