// Alert
// It shows a message and waits for the user to press “OK”.
alert("Hello");

// Prompt
// The function prompt accepts two arguments:
// result = prompt(title, []);
// e.g
let age = prompt('How old are you?', 100); 
alert(`You are ${age} years old!`); // You are 100 years old!
// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
// title - The text to show the visitor.
// default - An optional second parameter, the initial value for the input field.
// Note - Cancel or hitting the Esc key, then we get null as the result.

// Confirm - The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.
let isNova = confirm("Are you the boss?");
alert( isNova ); // true if OK is pressed

// TL;DR
/*We covered 3 browser-specific functions to interact with visitors:
alert
shows a message.
prompt
shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
confirm
shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
*/