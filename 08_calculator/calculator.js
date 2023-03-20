const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => {
    return total + number;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => {
    return total === 0 ? total = number : total * number;
  }, 0);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let total = 1;
  for (let i = 1; i < n + 1; i++) {
    total *= i
  };
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
