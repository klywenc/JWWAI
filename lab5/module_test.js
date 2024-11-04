const currency1 = require('./currency1');
const Currency = require('./currency2');
const currency2 = new Currency();

console.log("currency1 - USD to PLN:", currency1.convertToPLN(10, 'USD'));
console.log("currency1 - EUR to PLN:", currency1.convertToPLN(10, 'EUR'));

console.log("currency2 - GBP to PLN:", currency2.convertToPLN(10, 'GBP'));
console.log("currency2 - CHF to PLN:", currency2.convertToPLN(10, 'CHF'));
