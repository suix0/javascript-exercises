const sumAll = function(num1, num2) {
  if ((num1 < 0 || num2 < 0) || (typeof num1 != "number" || typeof num2 != "number")) {
    return 'ERROR';
  }

  // Swap parameters if first parameter is greater than second parameter
  if (num1 > num2) {
    let bucket = num1;
    num1 = num2;
    num2 = bucket;
  }

  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum 
};

// Do not edit below this line
module.exports = sumAll;
