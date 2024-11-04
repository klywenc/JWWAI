const math1 = require('./myMathModule1');
const MyMathModule = require('./myMathModule2');
const math2 = new MyMathModule();
console.log("math1 - add:", math1.add(5, 3));
console.log("math1 - power:", math1.power(2, 3));
console.log("math2 - subtract:", math2.subtract(10, 4));
console.log("math2 - divide:", math2.divide(10, 2));
