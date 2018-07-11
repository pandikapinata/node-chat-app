const moment = require('moment');
// Jan 1st 1970

// var date = new Date();
// console.log(date.getMonth());
var date = moment();
console.log(date.format('h:mm A'));