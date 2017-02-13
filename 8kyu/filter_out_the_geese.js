// Filter out the geese
// https://www.codewars.com/kata/filter-out-the-geese

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => geese.indexOf(b) == -1);
}