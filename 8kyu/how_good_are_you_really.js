// How good are you really?
// https://www.codewars.com/kata/how-good-are-you-really

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((sum, a) => sum + a) / classPoints.length;
}