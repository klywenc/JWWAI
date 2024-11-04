class Currency {
  constructor() {
    this.exchangeRates = {
      USD: 4.0,
      EUR: 4.5,
      GBP: 5.0,
      CHF: 4.3,
      JPY: 0.03
    };
  }

  convertToPLN(amount, currency) {
    const rate = this.exchangeRates[currency];
    return rate ? amount * rate : null;
  }
}

module.exports = Currency;
