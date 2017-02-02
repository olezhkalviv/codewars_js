// Are arrow functions odd?
// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

function odds(values){
  return values.filter((x) => {
    return x % 2 == 1;
  });
}