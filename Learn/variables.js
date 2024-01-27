// Variables are used to store this information.
// Variables should be named in a way that allows us to easily understand what’s inside them.
let age; //Variable declaration
age = 18; //Variable initialzation
let message = "Hello"; // Variable declaration + initialzation
let name = "ameya", alias = "nova"; //Multiple variable declaration + initialzation
alert(message);
// let message; // Repeated declaration leads to error

// Rules for names of variables 
// 1.Must only contain numbers, alphabets or symbols $ and _.
// 2. Must not start with digits
// 3. Cannot use keywords e.g 
// let let = 5; // leads to a error
let $ = 5;
let _ = 10;
alert( $ + _);
// let 1a; // cannot start with a digit.\
// Note : Variables are case sensitive i.e age and AGE are different.

//To declare a constant variable, use const instead of let
const text = "Text is a constant variable meaning it cannot be changed after it is first initialized";
// There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.
// For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// Benefits:
// COLOR_ORANGE is much easier to remember than "#FF7F00"