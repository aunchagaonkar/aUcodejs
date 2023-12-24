//functions are reusable blocks of code that can be executed whenever needed.
//functions are declared with the keyword function.
//functions can be declared with or without parameters.
//functions can return values.
//functions can be declared as variables by assigning a function to a variable.
//example:
// function sayHello() {
//    alert("Hello!");
// }
var sayHello = function() {
   alert("Hello!");
};
sayHello();
// Both these do the same thing. The second one is called an anonymous function.
// The first one is called a function declaration.
// The second one is called a function expression.
// You can pass parameters to a function.
//example:
let name = prompt("What is your name?");
var sayHello = function(name) {
   alert("Hello " + name + "!");
};  
sayHello(name);
