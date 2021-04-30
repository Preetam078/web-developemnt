//WINDOW VS DOCUMENT
/**
 1. Window id the main conatainer or we can say the "GLOBAL OBJECT"and
  operations related to entire browser window can be a part of window object
 1.DOM document is the child  of window object.,
 DOM helps in rendering the HTML context in the window.
 BOM is browser object model - it is use to navigate, http request.
 */


 //HTML is the root element for DOM
//some important codes for DOM

/**
 document.documentElement //show full html code(root element)

document.head

document.body

document.body.childNodes //show the no. of nodes in the body tag

document.body.children//show the no. of action performed in the body tag

document.body.children.length

document.body.hasChildNodes() //if has child node then return TRUE else FALSE
 
document.body.firstElementChild()

const line = document.body.firstElementChild.firstElementChild()
line.style.color="red" //can change the colour of the html text using DOM

const line = document.querySelector('#class_name') //name of the class in the <div> section of the html file whose data you want to access
line;
line.style.color = "yellow";

document.body.parentNode  <html> is the parent node
document.body.parentElement  <html> is the parent node  //same goes with the <head>

document.body.previousElementsibling //<head>

document.head.nextElementsibling //<body>

document.getElementbyID("ID") //return thr refernce by the ID

 */