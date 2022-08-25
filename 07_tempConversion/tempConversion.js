const ftoc = function(f) {
  
  // [°C] = ([°F] − 32) × 5⁄9

  let c = (f-32) * (5/9);
  if (c%1 != 0) {
    c = c.toFixed(1);
  }

  return Number.parseFloat(c);

}

const ctof = function(c) {
// [°F] = [°C] × 9⁄5 + 32	

  let f = c * 9/5 + 32;
  if (f%1 != 0) {
    f = f.toFixed(1);
  }

  return Number.parseFloat(f);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};