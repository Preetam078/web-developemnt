/************************************************ */
/**CONST VS LET VS VAR */
/**var = function scope */
/**const, let =block scope
 */
var myName ="preetam"
console.log(myName);/**preetam */
myName="raju"
console.log(myName);//**raju */


let myName ="preetam"
console.log(myName);/**preetam */
myName="raju"
console.log(myName);/**raju */

const myName ="preetam"
console.log(myName);/**preetam */
myName="raju"
console.log(myName);/**error as we cannot change the 
value of the const variable */

/** function scope and the block scope
*/

function biodata(){
 var myName="preetam";
if(true){
    var myLastName = "mondal"
    console.log("inner "+myLastName);
    console.log("inner "+myName);
}
console.log("outer "+myLastName); 
}
biodata();
/**var defined data can use anywhere in the program */


function biodata(){
    let myName="preetam";
   if(true){
       let myLastName = "mondal"
       console.log("inner "+myLastName);
       console.log("inner "+myName);
   }
   console.log("outer "+myLastName); 
   }
   biodata();
   /**error as let and the const data can only excessive
    * to the block
    */


   
   /******************************************* */
   /**templete literals(templete strings)    */
   for(let num =1;num<=10;null,num++){
       let table =12;
       console.log(`${table}*${num}=${num*table}`);
   }


   /****************************************** */
   /**Default parameter */
   function mul(a,b=10){
       return(a*b);
   }
   console.log(mul(3));



/*********************************************** */
   /***fat arrow function */
   /**normal method */
   function mul(a,b=10){
    return(a*b);
}
console.log(mul(3));/**in the normal method the function
can be called either first or after defining that function */

const sum =()=>{
    let a=10,b=10;
    let add=a+b;
    return `the sum of two numbers are : ${add}`;
}
console.log(sum);/**Function sum */
console.log(sum());/**20
/ *in the fat arrow function the function define first
and then it call*/
const sum2=()=>`the sum of two numbers : ${(a=4)+(b=6)}`;
console.log(sum2());