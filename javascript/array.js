/***array */

var friend =["preetam","rahul",true,32];
console.log(friend[1])
console.log(friend.length)/**print the length of the array */
/**rahul */
/**unlike other programming language the array in the 
 javascript can accept the different variable types
 */


/************************************************ */
/*FOR IN LOOP *//** */
/**traditional method */
var friend =["preetam","rahul",true,32];
for(var i=0;i<friend.length;i++){
    console.log(friend[i])
}

/**for in loop */
var friend =["preetam","rahul",true,32];
for(let element in friend){
    console.log(element);/**print the index values */
}/**for in loop help to print the index value */


/******************************************************* */
/**FOR OF LOOP */
var friend =["preetam","rahul",true,32];
for(let element of friend){
    console.log(element);
}/**prints the real values in the array */

/******************************************************* */
/**FOR EACH LOOP */
var myFriend =["preetam","rahul",true,32];
myFriend.forEach(function(element, index, array){/**call back function */
   console.log(`${element} index : ${index} array : ${array}`);/**print all the values */
});
/**for each loop doesn't support break statement as if it is started
 * then will end after completing the whole task 
 */

/***for each function using the arrow function */
myFriend.forEach((element,index,array) =>{
    console.log(`${element} index : ${index} array : ${array}`);
})


/**searching and filter in the array */
/**syntax-   array.prototype.indexOf() */

var Friend =["preetam","rahul","ram","shyam"];
console.log(Friend.indexOf("rahul"))/**1=index value */
console.log(Friend.indexOf("rahul",3))/**indexOf always
search from the forward direction if element found then it returns index value
but if not then it returns -1*/

/**push() add element to the end in the array */
const animals = ["pig","horse", "goat"]
var count=animals.push("chicken");
console.log(animals)
console.log(count);/**length of the new array */
count=animals.push("lion","tiger","cat")/**can push multiple values */
console.log(animals);
console.log(count)/**new length of the array */



/**unshift() add value in the starting of the array */
const animals1 = ["pig","horse", "goat"]
var count=animals1.unshift("chicken");
console.log(animals1)
console.log(count);/**length of the new array */
count=animals1.unshift("lion","tiger","cat")/**can unshift multiple values */
console.log(animals1);
console.log(count)/**new length of the array */
/**same goes with the numbers */



/**pop() remove the end element of the array*/
const numbers = [1,2,4,7,8,9,4,5]
console.log(numbers);
console.log(numbers.pop())/**5 */
console.log(numbers)
console.log(numbers.length)/**length of the array  */


/**shift() remove the first element in the array*/
const numbers1 = [1,2,4,7,8,9,4,5]
console.log(numbers1);
console.log(numbers1.shift())/*1 */
console.log(numbers1)
console.log(numbers1.length)/**length of the array  */


/**splice() method we can add or remove the values in the array */
const months = ["jan","mar","apr","jun","jul"]

/*add dec in the array end */
const newMonth =months.splice(months.length,0,"dec");
console.log(months);/**["jan","mar","apr","jun","dec"] */
/**return value of the splice menthod  */
console.log(newMonth)/**[] as in general the splice method we generally
use to delete the data but as in this case we didn't deleted anything
hence it returns []*/


/**uddate mar to MAR using splice method */
const months1 = ["jan","mar","apr","jun","jul"]

const new1 =months1.indexOf("mar");
if(new1!=-1){
 const update = months1.splice(new1,1,"MAR");
 console.log(months1);
 console.log(update);/**["mar"] */
}
else{
    console.log("no such data found")
}

/**delete using splice method */
const months2 = ["jan","mar","apr","jun","jul"]

const new2 =months2.indexOf("mar");
if(new2!=-1){
 const update1 = months2.splice(new2,2);/**delted two elements including "mar" */
 console.log(months2);
 console.log(update1);
}
else{
    console.log("no such data found")
}

/*2nd type* */
const months3 = ["jan","mar","apr","jun","jul"]

const new3 =months3.indexOf("mar");
if(new3!=-1){
 const update2 = months3.splice(new3,Infinity);/**delted all element from "mar"*/
 console.log(months3);
 console.log(update2);
}
else{
    console.log("no such data found")
}


/*************************************************************** */
/** MAP METHOD*/
const array1 = [1, 4, 9, 16, 25]
let newArr=array1.map((current,index,arr) => {
    return current >9;
})
console.log(array1)
console.log(newArr);/**map function return a new array of the boolean 
result */
const array2 = [1, 4, 9, 16, 25]
let newArr1=array2.map((current,index,arr) => {
    return `the index value : ${index}, value : ${current}, in the array : ${arr}`
})
console.log(newArr1)
/*the MAP function doesnot mutate the original value but create the new
array as a return type *//**we can use Reduce(), sort(), filter() */

const array3 = [1, 4, 9, 16, 25]
let newArr2=array3.forEach((current,index,arr) => {
    return `the index value : ${index}, value : ${current}, in the array : ${arr}`
})
console.log(newArr2)/**undifined */
/**the FOR EACH function mutate the original array and print undefined as
 * the return type  /**we cannot use Reduce(), sort(), filter() as
  foreach function returns undifined */
 


/***find the square root of the element in array */
let arr3 = [25, 36, 49, 64, 81];
let arrSqr = arr3.map((element) => {
    return Math.sqrt(element);
})
console.log(arrSqr);


/**multiply the element ny 2 and only print the value greater than 10  */
let arr2 = [2,3,4,6,8];

let arr4= arr2.map((element) => {
    return element*2;
}).filter((element) =>{ /**chaining of the function */
     return element >10;
})
console.log(arr4)
/***********************OR*************** */
arr4= arr2.map((element) =>  element*2).filter((element) => element>10);
console.log(arr4)


/**************************************************** */
/**reduce function is used to convert the 2D and 3D array into a
 * single dimensional array.(flatten an array)
 */
/*reducer function takes 4 parameter accumulator, value, index, array*/
/**reduce method return the single value */

let arrr = [5,6,3]

let sum = arrr.reduce((accumulator, data , index, arrr) =>{
    return accumulator += data;
})
console.log(sum);


let arrr1 = [5,6,3]

let sum2 = arrr1.reduce((accumulator, data , index, arrr) =>{
    return accumulator += data;
},7)/**7 has declare as the first value in the array or we can perform the 
         the same task using the unshit function */
console.log(sum2);


/***flatten an array  */
let str =[
        ['zone 1','rita'],
        ['zone 2','neha'],
        ['zone 3','rahul'],
        ['zone 4','preetam']
];
let flat = str.reduce((accum, dta) => {
    return accum.concat(dta);
})
console.log(flat);