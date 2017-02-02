// Barking mad
// https://www.codewars.com/kata/54dba07f03e88a4cec000caf

function Dog(breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");