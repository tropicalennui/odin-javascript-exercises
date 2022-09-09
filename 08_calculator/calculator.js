const add = function () {
  const start = 0;
  const args = Array.prototype.slice.call(arguments);
  const addArgs = args.reduce((a, b) => a + b, start);
  return addArgs;
};

const subtract = function () {
  const args = Array.prototype.slice.call(arguments);
  const subArgs = args.reduce((a, b) => a - b);
  return subArgs;
};

const sum = function () {
  const start = 0;
  const args = Array.prototype.slice.call(arguments);
  const sumArgs = args.reduce((a, b) => a + b, start);
  return parseInt(sumArgs);
};

const multiply = function () {

};

const power = function () {

};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
