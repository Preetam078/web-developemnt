//in OOPs  the object is something we can called it as a container.
//in can store variable data and data types in the object.
 

//creating the object
var boidata = {
    //Object literal is called as key : value
    myName : "preetam",//object literal
    myAge : 28,
    getData : function(){ //not a function but called as method
        console.log(`my name ${boidata.myName} and the age ${boidata.myAge}`)
    }
}
boidata.getData();

//2nd method  as after the ES6
var boidata = {
    //key : value
    myName : "preetam",
    myAge : 28,
    getData (){ //not a function but called as method
        console.log(`my name ${boidata.myName} and the age ${boidata.myAge}`)
    }
}
boidata.getData();


//object inside the object 
var boidata = {
    myName : {
        realName : "mondal", //object inside the object 
        birth : 29,
    },
    myAge : 28,
    getData : function(){ //not a function but called as method
        console.log(`my name ${boidata.myName} and the age ${boidata.myAge}`)
    }
}
console.log(boidata.myName.realName)//mondal



//this object 
//it conatain the current context
//it can have different values depends on the where it placed
console.log(this)//{} this is letting the window object as the current context

function myName() {
   console.log(this)//{} window context
}
myName()


var myName1 = "preetam"
function myNames() {
    console.log(this.myName1);
}
myNames(); //preetam,  as we have declared myName1 in global scope


//this in the object
const obj = {
    myName2 : "preetam",
    printing(){
        console.log(this)
    }
}
obj.printing();//{ myName2: 'preetam', printing: [Function: printing] }
//when we declare "this" in object the current context become Object
  
const obj1 ={
    myAge : 26,
    work : () =>{
        console.log(this);
    }
}
obj1.work();//{} it is a limitation that we cannot use this in fat arrow function
