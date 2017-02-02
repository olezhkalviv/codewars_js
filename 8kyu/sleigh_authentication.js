// Sleigh Authentication
// https://www.codewars.com/kata/52adc142b2651f25a8000643

function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
  return name == "Santa Claus" && password == "Ho Ho Ho!" ? true : false;
};