//Query Selectors
let display = document.querySelector(".display");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelectorAll(".equal");
let numberButtons = document.querySelectorAll(".number");
let clearButton = document.querySelectorAll(".clearentry");
let eraseButton = document.querySelector(".allclear");
let decimalButton = document.querySelector(".decimal");
display.textContent = "0";

//Functions for math operation function
let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

//Operate function
let operate = (operator, a, b) => {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
             if (b === 0) return "INFINITY";
             else return divide(a, b);
        default:
            return null;    
    }
}

console.log(operate("-", 4, 10));
