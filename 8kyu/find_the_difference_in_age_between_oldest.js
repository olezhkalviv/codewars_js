// Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/find-the-difference-in-age-between-oldest-and-youngest-family-members

function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}