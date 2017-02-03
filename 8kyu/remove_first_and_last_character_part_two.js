// Remove First and Last Character Part Two
// https://www.codewars.com/kata/remove-first-and-last-character-part-two

function array(str) {
	arr = str.split(',');
	return arr == null || arr.length <= 2 ? null : arr.slice(1, arr.length - 1).join(' ');
}