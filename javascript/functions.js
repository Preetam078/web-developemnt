/*Function in the javascript */
function sum(){
    var a =5,b=10;
    let total=a+b;
    console.log("the addition is  : "+total);
}
sum();

/**function parameter is the variable in the function*/
/**function arguments are the values that we pass in the 
 * function
*/

function sum(a,b){
    let total1=a+b;
    console.log("the addition is : "+total1);
}
sum();/*NaN as no argument passed in this call*/ 
sum(50,40);
sum(10,20);
/**we call functions so to reuse the code in the function 
 * multiple times as on the demands.
 * it eliminates to write the same code again and again 
 */



/***Function expression */
/**create a function and put it into the variable */
function sum1(a,b){
    let total1=a+b;
    console.log(total1);
}
let func=sum1(10,50);
func;/**60 */

/**return statement */
function sum1(a,b){
    return  total1=a+b;
  
}
let func1=sum1(10,60);
console.log(func1);

/**anonymous function */
/**the anonymous function is the function which 
 * have no name
 */

var item = function(a,b){
    let total = a+b;
    return total;
}
console.log(item(15,15));