const findTheOldest = function(people) {
  const date = new Date();
  const currentYear = date.getFullYear();
  let ages = [];

  // Calculate the age of current person and push in ages array
  for (let i = 0; i < people.length; i++) {
    if (people[i].yearOfDeath === undefined) {
      ages.push(currentYear - people[i].yearOfBirth);
    } else {
      ages.push(people[i].yearOfDeath - people[i].yearOfBirth);
    }
  }

  // Sort and get the highest age
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < ages.length - 1; i++) {
      if (ages[i] > ages[i + 1]) {
        let bucket = ages[i + 1];
        ages[i + 1] = ages[i];
        ages[i] = bucket;
        swapped = true;
      }
    }
  }
  
  let highestAge = ages[ages.length - 1];

  // Calculate the ages of the people objects and compare with highest age
  for (let i = 0; i < people.length; i++) {
    let currentObjectAge;
    if (people[i].yearOfDeath === undefined) {
      currentObjectAge = currentYear - people[i].yearOfBirth;
    } else {
      currentObjectAge = people[i].yearOfDeath - people[i].yearOfBirth;
    }

    if (currentObjectAge === highestAge) {
      return people[i];
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
