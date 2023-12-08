const reverseString = function(str) {
  // Push the characters from the end of the string to new string
  let strReverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
