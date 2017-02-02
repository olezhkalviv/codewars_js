// Object Oriented Piracy
// https://www.codewars.com/kata/54fe05c4762e2e3047000add

function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
  this.isWorthIt = function () {
    return draft - crew * 1.5 > 20;
  }
}