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
  const flatArgs = args.reduce((elem1, elem2) => elem1.concat(elem2));
  const sumArgs = flatArgs.reduce((a, b) => a + b, start);
  return parseInt(sumArgs);
};

const multiply = function () {
  const args = Array.prototype.slice.call(arguments);
  const flatArgs = args.reduce((elem1, elem2) => elem1.concat(elem2));
  const multiplyArgs = flatArgs.reduce((a, b) => a * b);
  return parseInt(multiplyArgs);
};

const power = function () {
  const args = Array.prototype.slice.call(arguments);
  //const flatArgs = args.reduce((elem1, elem2) => elem1.concat(elem2));
  const powArgs = args.reduce((a, b) => Math.pow(a, b));
  return parseInt(powArgs);
};

const factorial = function () {
  const n = Array.prototype.slice.call(arguments);
  if (n == 0) { return 1 };
  return (n != 1) ? n * factorial(n - 1) : 1;
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
