let userInput = +prompt("enter a num ");
let userInput1 = +prompt("enter a num ");
let userInput2 = prompt("enter a num ");

if (userInput2 === "+"){
    console.log(userInput + userInput1);
} else if (userInput2 === "-"){
    console.log(userInput - userInput1);
} else if (userInput2 === "*"){
    console.log(userInput * userInput1);
} else if (userInput !== "0"){
    console.log(userInput / userInput1);
} else {
    console.log("user invalid num dala hai");
}
