// Duck Duck Goose
// https://www.codewars.com/kata/duck-duck-goose

function duckDuckGoose(players, goose) {
    return players[(goose - 1) % players.length].name;
}