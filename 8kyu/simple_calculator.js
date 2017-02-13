// simple calculator
// https://www.codewars.com/kata/simple-calculator

function calculator(a, b, sign) {
    if (isNaN(a) || isNaN(b)) return 'unknown value';
    switch (sign) {
        case '+': return a + b;
        case '-': return a - b;
        case '/': return a / b;
        case '*': return a * b;
        default: return 'unknown value';
    }
}