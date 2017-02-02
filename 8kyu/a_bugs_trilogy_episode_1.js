// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
// https://www.codewars.com/kata/562e98755e9214cd2500003d

function yourFutureCareer() {
	var career = Math.random();
    return (career <= 0.32 ? 'FrontEnd' : career <= 0.65 ? 'BackEnd' : 'Full-Stack') + ' Developer';
}

yourFutureCareer();