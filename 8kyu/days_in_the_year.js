// Days in the year
// https://www.codewars.com/kata/days-in-the-year

function yearDays(year) {
    return `${year} has ${year % 4 ? 365 : year % 100 ? 366 : year % 400 ? 365 : 366} days`
}