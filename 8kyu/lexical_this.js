// Lexical this
// https://www.codewars.com/kata/55a13556ca4a6d0ab4000003

var Person = function () {
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      f.map(x => this._friends.push(x));
    }
  }
  return person;
}