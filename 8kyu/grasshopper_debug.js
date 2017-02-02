// Grasshopper - Debug
// https://www.codewars.com/kata/55cb854deb36f11f130000e1

function weatherInfo(temp) {
  var c = convertToCelsius(temp)
  return c + (c <= 0 ? " is freezing temperature" : " is above freezing temperature");
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9)
  return celsius;
}