const exchangeRates = {
  USD: 4.0,
  EUR: 4.5,
  GBP: 5.0,
  CHF: 4.3,
  JPY: 0.03
};

exports.convertToPLN = (amount, currency) => {
  const rate = exchangeRates[currency];
  return rate ? amount * rate : null;
};
