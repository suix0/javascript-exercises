const palindromes = function (str) {
  let strUpper = str.toUpperCase(); // Convert string first to uppercase
  let revisedStr = ''; // String without spaces and symbols
  let reverseStr = ''; // The revised string in reverse

  for (let i = 0; i < strUpper.length; i++) {
    // Check if char is a letter
    if (strUpper.charCodeAt(i) >= 65 && strUpper.charCodeAt(i) <= 90) {
      revisedStr += strUpper[i];
    // Also include numbers
    } else if (strUpper.charCodeAt(i) >= 48 && strUpper.charCodeAt(i) <= 57) {
      revisedStr += strUpper[i];
    }
  }

  // Put the revised string in reverse
  for (let i = revisedStr.length - 1; i >= 0; i--) {
    reverseStr += revisedStr[i];
  }
  
  return revisedStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
