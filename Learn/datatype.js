// A value in JavaScript is always of a certain type. For example, a string or a number.
// There are eight basic data types in JavaScript.

// We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
let message = "hello";
alert(message);
message = 123456;
alert(message);
// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”
// meaning that there exist data types, but variables are not bound to any of them.
let num = 12;
let num2 =12.5;
// The number type represents both integer and floating point numbers.

// Infinity
// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
alert( 1 / 0 ); // Infinity

// NaN
// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation.
alert( "not a num" / 2 ); // NaN, such division is erroneous

// BigInt
// In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less 
// than -(253-1) for negatives.
// To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe 
// integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an 
// “approximate” value may be stored. For example, these two numbers (right above the safe range) are the same:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// A BigInt value is created by appending n to the end of an integer:
const bigInt = 1234567890123456789012345678901234567890n; // the "n" at the end means it's a BigInt

// String
// String
// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
alert(phrase);
// In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
//There’s practically no difference between them in JavaScript.
// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping 
// them in ${…}, for example:
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

// Boolean
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect” e.g
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
// Boolean values can also be used for comparisons like:
let value = 4 > 1; // value = true 

// Null
// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
let age = null;

// Undefined
// The meaning of undefined is “value is not assigned”.
// When variable is declared but not initialized
let number;
alert(number); // This will output undefined
// or
number = undefined; // explicit declaration as undefined variable

// Objects and Symbols
// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing 
// (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
// The symbol type is used to create unique identifiers for objects.

// typeof operator
// Returns the type of operand 
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof(number) // similar syntax but works same as typeof number


/*
TL;DR
Data types in JavaScript: The eight basic data types in JavaScript: number, string, boolean, null, undefined, 
object, symbol, and bigint.
typeof operator: Use the typeof operator to check the type of a value, and mentions some quirks and exceptions
of this operator.
Quotes for strings: The three types of quotes for strings: double, single, and backticks, and demonstrates how to 
embed variables and expressions into strings using backticks.
Special numeric values: The special numeric values Infinity, -Infinity, and NaN, and they behave in 
mathematical operations.
*/