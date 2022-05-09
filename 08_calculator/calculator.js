const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	const result = array.reduce((total, number) => total += number, 0);
  return result;
};

const multiply = function(array) {
  const result = array.reduce((total, number) => total *= number, array[0]) / array[0];
  return result;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  } else {
    let total = number;
    for (let i = number - 1; i > 0; i--){
      total *= i;
    }
    return total;
  }
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
