// Drink about
// https://www.codewars.com/kata/56170e844da7c6f647000063

function peopleWithAgeDrink(old) {
  return 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky');
};