// Number of People in the Bus
// https://www.codewars.com/kata/number-of-people-in-the-bus

var number = function (busStops) {
    return busStops.map(s => s[0] - s[1]).reduce((s, a) => { return s += a; });
}