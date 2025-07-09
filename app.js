// let userInput = +prompt("enter a num ");
// let userInput1 = +prompt("enter a num ");
// let userInput2 = prompt("enter a num ");

// if ()




let num1 = parseFloat(prompt("Pehla number daalo:"));
let num2 = parseFloat(prompt("Dosra number daalo:"));
let operator = prompt("Kya karna hai? +, -, *, /");

let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "0 se divide nahi kar sakte!";
  }
} else {
  result = "Invalid operator dala hai!";
}
alert("Result: " + result);