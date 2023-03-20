const findTheOldest = function(people) {
  people.reduce(oldest, person => {
    if (!oldest) return person;
    ageOfPerson = person.yearOfBirth - person.yearOfDeath;
    ageOfOldest = oldest.yearOfBirth - oldest.yearOfDeath;
    return ageOfOldest > ageOfPerson ? oldest : person
  });
};

// Do not edit below this line
module.exports = findTheOldest;
