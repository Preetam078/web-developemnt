 //declareing string using the string()construction , by simple way
 var myName = new String("preetam");//string constructor
 console.log(myName);

 //simple way
 var nyName = "preetam"
 console.log(myName);
 console.log(myName.length);
 
 /********************************************************* */
//escape character 
var sentence ="hello to \"world\" we are awesome";//escape backslash character
console.log(sentence);

//OR
var sentence ='hello to "world" we are awesome';//use alternate colon
console.log(sentence);




/***find string in the string  ***********************************/


/**indexOf */
var data = "hello to the programmer"
console.log(data.indexOf('to'));/**indexOf in string is case sensitive */
console.log(data.indexOf("t",4));/**searching will start from 4 */

/**search function */
var data = "hello to the programmer"
console.log(data.search("to"))/**unlike indexOf, search function start search 
from the random position */



/***extracting the string part*********************************** */

/**slice function */
/***slice(start, end) *///print the extracted part in the new string
var data ="apple, mango, orange, banana"
var str = data.slice(0,4);/**it doesnot include the end index value(4) */
console.log(str);/**appl */
str = data.slice(7,-2);//start from 7 and doesnot print all 2 index value
console.log(str);


/**display only 280 character in the string
 */

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
console.log(str.length);
var new1 = str.slice(0,280);
console.log(new1);
console.log(new1.length)

/**subtring function */
//it is same as slice but it cannot accept the -ve index
var data ="apple, mango, orange, banana"
var input = data.substring(0,5);
console.log(input);
input = data.substring(7,-2)//it actually starting from 0 to 7 and ignoring the -2 index
console.log(input)


/**substr function */
//it is similar to the slice but at end it inputs the length of extracted part instead of the end index
var data ="apple, mango, orange, banana"
var input = data.substr(0,5);
console.log(input)/**apple */
input = data.substr(7, -2)
console.log(input)/**no output */
input = data.substr(-6);
console.log(input)//banana //it will extract the string form back


///*******************Rplacing the string content ****************** */

var data = "hello to all how are you guys"
var replace = data.replace("hello", "kemchho")
console.log(replace)/**kemchho to all how are you guys */
var data1 = "hello to all, hello guys"
var reddem = data1.replace("hello","Hello");
console.log(reddem)//Hello to all, hello guys
console.log(data1)//replace function dont alter the string 
//it will only edit the first found data in the string/


/***************extracting the string character********************* */
//charAt(position)//method 1

var str ="hello world";
console.log(str.charAt(0))/**h */


//charCodeAt method  - return the unicode of the character in the string 
//this method returns a UTF-16 code (0 to 65535)
//unicode provides the unique number for every character
var str ="hello world";
console.log(str.charCodeAt(0))//unicode value at index 0



//return the unicode of the last character in a string
var data = "hello world"
let last = data.length-1;
console.log(last);
console.log(data.charCodeAt(last))

//property access
//ECMASCRIPT-5 2009 allow property access [] on string 
var data = "hello world"
console.log(data[1])/**e */


/* UPPERCASE and LOWERCASE */
var data = "hello world"
console.log(data.toUpperCase());
console.log(data.toLowerCase())


//concat function
var name1 = "preetam"
var sname ="mondal"
console.log(name1.concat(sname))
console.log(name1.concat(" ",sname));
console.log(`${name1} ${sname}`)

/**convert the string into the array */
var str = "a,b,c,d,e,f,"
console.log(str.split(","))//split into coma 
console.log(str.split("")) //split into space 