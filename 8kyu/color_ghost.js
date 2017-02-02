// Color Ghost
// https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

var Ghost = function () {
  this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)];
};