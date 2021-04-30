/***date and time in javascript  */
//platform independent format that represent the data in milliseconds since 1 january 1970 UTC

//4 ways to create date object//

//new date() constructor
var currDate = new Date();
console.log(currDate)/**2021-04-29T17:40:42.554Z */
console.log(new Date())/**2021-04-29T17:40:42.554Z */
console.log(new Date().toLocaleString());/**29/04/2021, 23:14:38 */
console.log(new Date().toString());/**Thu Apr 29 2021 23:15:30 GMT+0530
 (India Standard Time) */



 //Date.now()
 console.log(Date.now())/**1619718413584 */
 //return the no. of millseconds since 1970 



 //new Date(year, month, ...........)
 //7 numbers specify year, month, day, hour, minute, second and millisecond(this is in order)
 //month count from 0 to 11
 var d = new Date(2021,0,5, 10, 33, 30, 0)
 console.log(d.toLocaleString())/**05/01/2021, 10:33:30 */
var s = new Date()
console.log(s.toLocaleString())/** 29/04/2021, 23:26:11*///on the spot timming




//new Date(string)
var d = new Date("05/01/2021, 10:33:30")
console.log(d.toLocaleString())//01/05/2021, 10:33:30,m          



//new Date(millisecond)
var d = new Date(1619719128796)
console.log(d.toLocaleString())//29/04/2021, 23:28:48//timming on that millisecond


const date = new Date()
console.log(date.getDate())//29
console.log(date.getDay())//4
console.log(date.getHours())//23
console.log(date.getMinutes())//36
console.log(date.getMonth())//3
console.log(date.getUTCMilliseconds())//121
console.log(date.getFullYear())//2021

console.log(date.setUTCFullYear(2021))//1619719812240 output will come in milliseconds for all types of the get date/time function







