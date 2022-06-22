const ftoc = function() {
let fahrenheit=32;
  let ftoc=Math.floor(fahrenheit-32)*5/9;
  return ftoc;
};

const ctof = function() {
  let celcius = 0;
 let ctof = Math.floor(celcius*9/5)+32;
  return ctof;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
