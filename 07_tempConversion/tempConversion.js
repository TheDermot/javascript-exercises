const convertToCelsius = function (fahrenheit) {
  let convertedToC = (fahrenheit - 32) * (5 / 9);
  return Math.round(convertedToC * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  let convertedToF = celsius * (9 / 5) + 32;
  return Math.round(convertedToF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
