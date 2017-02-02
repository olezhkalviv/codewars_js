// Are there any arrows left?
// https://www.codewars.com/kata/559f860f8c0d6c7784000119

function anyArrows(arrows){
  return arrows.some(x => !x.damaged || x.damaged == false);
}