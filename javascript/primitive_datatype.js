//undefined, boolean, number, string, bigint, symbol
var myName="preetam";
console.log(myName);
console.log(typeof(myName));
/**string**/

var age = 26;
console.log(age);
console.log(typeof(age));
/**number**/

var iAmPreetam = true;
console.log(iAmPreetam);
console.log(typeof(iAmPreetam));
/**boolean**/

console.log(typeof(name));
/**undefined**/

console.log(10+"20");
/**1020**/

console.log(9-"5");
/**4 this is a bug in the javascript**/

console.log("java"+"script");
/**javascript**/

console.log("java "+"script");
/**java script**/

console.log("java"-"script");
/**NaN(not a number) it is a property of the global object
  or it is a variable in the global scope**/




  var myPhoneNumber = 3433853833;
  var myName = "preetam";
  console.log(isNaN(myPhoneNumber));
  /**false */
  console.log(isNaN(myName));
  /**true */


  console.log(NaN===NaN);
  //***false */
  console.log(Number.NaN===NaN);
  /**false */
  console.log(isNaN(NaN));
  /**true */

  console.log(isNaN(Number.NaN));
  /**true */
  console.log(Number.isNaN(NaN));
  /**true */





console.log(true+true);
/**2 (true=1, false=0)**/

console.log(true+false);
/**1  */

console.log(false-true);
/**-1 */

console.log(false-false);
/**0 */

//difference between null and undefined

var work = null;
console.log(work);
/**null */
console.log(typeof(work));
/**object  this is the second bug as javascript is 
 not a primitive data type 
*/

var $work;
console.log($work);
/**undefined */
console.log(typeof($work));
//**undefined */

