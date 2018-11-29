// node did not have 'import' implemented the new ES6 feature of import statements.
// import largeNumber from 'script2.js';

// node syntax is: 
const c = require('./script2');
// variable c asks for modules exported from script2.js. the information is exported as an object, so you can call keys of the object


const a = c.largeNumber;
const b = 55;

console.log(a + b);
