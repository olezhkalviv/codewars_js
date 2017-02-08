// Coding 3min : Jumping Dutch act
// https://www.codewars.com/kata/coding-3min-jumping-dutch-act

function sc(floor) {
    var speech = '';
    if (floor > 1) {
        for (i = 1; i < floor; i++) {
            speech += 'Aa~ ';
        }
        speech += 'Pa!';
        if (floor <= 6) speech += ' Aa!';
    } 
    return speech;
}