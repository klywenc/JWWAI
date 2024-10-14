const { format } = require('string-kit');

// To cos formatuje wiadomosci w konsoli
const formattedMessage = format('Siema, ^r%s^! Mam dla ciebie: %d + %d = %d', 'gościu', 5, 3, 5 + 3);

console.log(formattedMessage);  
//
