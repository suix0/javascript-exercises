const convertToCelsius = function(fahr) {
  const celcius = (fahr - 32) / 1.8;
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  const fahrenheit = (celcius * 1.8) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
