const repeatString = function(str, num) {
  if (num === 0) {
    return '';
  } else if (num < 0) {
    return 'ERROR';
  }

  let strRepeat = str;
  for (let i = 1; i < num; i++) {
    strRepeat += str;
  }
  return strRepeat;
};

// Do not edit below this line
module.exports = repeatString;
