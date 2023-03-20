const fibonacci = function(num) {
  num = +num
  if (num < 0) return "OOPS"; 
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
};

// 3, 2,

// Do not edit below this line
module.exports = fibonacci;
