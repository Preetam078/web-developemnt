/***if else statement */


let tomr='rain';
if(tomr=='rain'){
   console.log("have your raincoat")
}
else{
    console.log("no need to take raincoat")
}


let tomr1='sunny';
if(tomr1=='rain'){
   console.log("have your raincoat")
}
else{
    console.log("no need to take raincoat")
}



/**in javascript we have 5 falsy values
   0,"", undefined, null, NaN, false*/

   if(score=0){
       console.log("preetam")
   }else{
       console.log("hello")
   }
/**hello , because of falsy value */

if(score=10){
    console.log("preetam")
}else{
    console.log("hello")
}
/**preetam, because of truely value */




/**Conditional(ternary) operator*/
/**the conditional ternary operator is the only 
 * operator in javascript which takes three operands 
 */
/**traditional method */
var age = 17;
if(age >= 18){
    console.log("you are eligible");
}else{
    console.log("you are not eligible");
}
/**you are not eligible */

/**ternary operation format*/
/*(condition)?value1(if true):value2(if false)*/ 
var age1=18;
console.log((age1>=18)?"you are eligible":"you are not eligible");



/**Switch statement */
var area="circle";
var pi=3.14,r=5,l=10,b=20;
switch(area){
    case"circle":
       console.log("the area is : "+pi*r**2);
       break;
    case"triangle":
        console.log("the area is :"+(l*b)/2);
        break;
    case"rectangle":
        console.log("the area is : "+l*b);
        break;
    default:
        console.log("wrong choice");
}


/**While loop */

let num=10;
while(num>=0){
    console.log(num);
    num--;
}

/**Do-While loop */
let num2=20
debugger;
do{
    console.log(num2);
    num2++;
}while(num2<10)  
/**at least we will get a single output  */



/**for loop */
for(var i=0;i<10;i++){
    console.log(i);
}



