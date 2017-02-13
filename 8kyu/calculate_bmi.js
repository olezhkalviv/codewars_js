// Calculate BMI
// https://www.codewars.com/kata/calculate-bmi

function bmi(weight, height) {
    var ind = weight / Math.pow(height, 2);
    return ind <= 18.5 ? 'Underweight' : ind <= 25 ? 'Normal' : ind <= 30 ? 'Overweight' : 'Obese';
}