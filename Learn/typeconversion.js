// String Converison
// String conversion happens when we need the string form of a value.
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

// Number Converison
// Numeric conversion in mathematical functions and expressions happens automatically.
alert( "6" / "2" ); // 3, strings are converted to numbers
// or
let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number
// Note - If the string is not a valid number, the result of such a conversion is NaN.

// Numeric conversion rules:
// Value	        Becomes…
// undefined	    NaN
// null	            0
// true and false	1 and 0
// string           If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. 
//                  An error gives NaN.

// Boolean Conversion
// The conversion rule:
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
// IMP NOTE - he string with zero "0" is true
// Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)