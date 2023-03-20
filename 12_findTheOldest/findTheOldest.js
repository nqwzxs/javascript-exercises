const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    if (!oldest) return person;
    ageOfPerson = getAge(person.yearOfDeath, person.yearOfBirth);
    ageOfOldest = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    return ageOfOldest > ageOfPerson ? oldest : person;
  });
};

const getAge = function (death, birth) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
