// program to check if a person is eligible for vote or not
let age = prompt("Enter your age");
function checkAge(age) {
    // if (age >= 18) {
        // return true;
    // } else {
        // return confirm("Do you have your parents' permission to vote?");
    // }
    // same as
    // return (age>=18) ? true : confirm("Do you have your parents' permission to vote?");
    // same as
    return (age>=18) || confirm("Do you have your parents' permission to vote?") ;
}
let ans = checkAge(age);
if (ans) {
    alert("You are eligible to vote");
}
else {
    alert ("You are not eligible to vote");
}