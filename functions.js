//functions are reusable blocks of code that can be executed whenever needed.
//functions are declared with the keyword function.
//functions can be declared with or without parameters.
//functions can return values.
//functions can be declared as variables by assigning a function to a variable.
//example:
function sayHello() {
   alert("Hello!");
}

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

//funtion can return values.
//example:
var sayHello = function(name) {
   return "Hello " + name + "!";
};
var greeting = sayHello("John");
alert(greeting);

// You can also declare a function inside another function.
//example:
var sayHello = function(name) {
   var greeting = "Hello " + name + "!";
   return greeting;
};
alert(sayHello("John"));

// You can also return a function from a function.
//example:
var sayHello = function(name) {
   var greeting = "Hello " + name + "!";
   return function() {
      alert(greeting);
   };
};
var helloJohn = sayHello("John");
helloJohn();

// You can also pass a function as a parameter to another function.
//example:
var sayHello = function(name) {
   var greeting = "Hello " + name + "!";
   return greeting;
};
var greeting = function(name) {
   alert(sayHello(name));
};
greeting("John");
