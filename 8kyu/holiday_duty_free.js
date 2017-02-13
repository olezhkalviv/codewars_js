// Holiday VIII - Duty Free
// https://www.codewars.com/kata/holiday-viii-duty-free

function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice * discount / 100));
}