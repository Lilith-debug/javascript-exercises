const ftoc = function(fahrenheit) {
  celsius = (fahrenheit - 32) * 5/9
  celsiusRounded = Math.round(celsius * 10) / 10
  return celsiusRounded

};

const ctof = function(celsius) {
  fahrenheit = celsius * 9/5 + 32
  fahrenheitRounded = Math.round(fahrenheit * 10) / 10
  return fahrenheitRounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
