//Query Selectors
let display = document.querySelector(".display");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");
let numberButtons = document.querySelectorAll(".number");
let clearButton = document.querySelector(".clearentry");
let eraseButton = document.querySelector(".allclear");
let decimalButton = document.querySelector(".decimal");
let posneg = document.querySelector(".posneg");



let firstOperand = [];
let currentOperation = [];
let result = [];


eraseButton.addEventListener('click', () => {
    display.textContent = "0";
    firstOperand = [];
    currentOperation = [];
    result = [];
})

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
    if (display.textContent === "0") {
        display.textContent = "";
        display.textContent = number;
        
    } else {
        display.textContent += number;
    }
}

function setOperation(operator) {
    currentOperation = operator;
    display.textContent = "";
    
console.log(firstOperand);
console.log(currentOperation);
}


function evaluate(firstOperand, currentOperation, result) {
    if (firstOperand && currentOperation) {
        display.textContent = result;
    }
    a = firstOperand;
    b = result;
    switch (currentOperation) {
        case "+":
            result = add(a, b);
            display.textContent = result;
        case "-":
            result = subtract(a, b);
            display.textContent = result;

        case "*":
            result = multiply(a, b);
            display.textContent = result;

        case "/":
             if (b === 0) return "INFINITY";
             else result = divide(a, b);
             display.textContent = result;

        default:
            return null;   
}
}


equalButton.addEventListener('click', evaluate(firstOperand, currentOperation, result));


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

