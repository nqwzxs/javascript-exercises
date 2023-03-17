const removeFromArray = function(array, ...filter) {
  let filteredArray = [];
  for (let element of array) {
    if (filter.includes(element)) continue;
    filteredArray.push(element);
  };
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
