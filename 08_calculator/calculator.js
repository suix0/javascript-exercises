const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  if (nums.length === 0) return 0;

  let sum = nums[0];
	for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let product = nums[0];
  for (let i = 1; i < nums.length; i++) {
    product *= nums[i];
  }
  return product;
};

const power = function(num, powerOf) {
	return num ** powerOf;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let fact = num;
  for (let i = num - 1; i > 0; i--) {
    fact *= i;
  }
  return fact;
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
