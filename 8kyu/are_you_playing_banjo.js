// Are You Playing Banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
  return name + (name[0].toUpperCase() == "R" ? " plays banjo" : " does not play banjo");
}