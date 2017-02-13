// Age Range Compatibility Equation
// https://www.codewars.com/kata/age-range-compatibility-equation

function datingRange(age) {
    return age <= 14 ? `${Math.floor(age - 0.1 * age)}-${Math.floor(age + 0.1 * age)}` : `${Math.floor(age / 2 + 7)}-${Math.floor((age - 7) * 2)}`;
}