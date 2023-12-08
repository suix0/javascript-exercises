const getTheTitles = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].title);
  }
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
