//Query Selectors
let display = document.querySelector(".display");
let operatorButtons = document.querySelectorAll(".operator");
let equalButton = document.querySelector(".equal");
let numberButtons = document.querySelectorAll(".number");
let clearButton = document.querySelector(".clearentry");
let eraseButton = document.querySelector(".allclear");
let decimalButton = document.querySelector(".decimal");
let posneg = document.querySelector(".posneg");



let firstOperand = "";
let secondOperand = "";
let currentOperation = "";
let result = "";


eraseButton.addEventListener('click', () => {
    display.textContent = "";
    firstOperand = "";
    secondOperand = "";
    currentOperation = "";
    result = "";
})

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
);

function appendNumber(number) {
    if (display.textContent === "") {
        display.textContent += number;
       
        
    } else {
        display.textContent += number;
        
    }

}

function setOperation(operator) {
    firstOperand = display.textContent;
    currentOperation = operator;
    display.textContent = "";
    console.log(firstOperand);
    console.log(currentOperation);
    
}

/*
//Operate function
let operate = (currentOperation, firstOperand, secondOperand) => {
    
    secondOperand.push(Number(display.textContent));
    
    a = firstOperand;
    b = secondOperand;
    switch (currentOperation) {
        case "+":
            result = add(a, b);
            display.textContent = ''
            display.textContent += result;
        case "-":
            result = subtract(a, b);
            display.textContent = result;
        case "*":
            result = multiply(a, b);
            display.textContent = result;
        case "/":
             if (b === 0) display.textContent = "INFINITY";
             else result = divide(a, b);
             display.textContent = result;
        default:
            return null;    
    }
} */

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


equalButton.addEventListener('click', function(event){
    secondOperand = display.textContent;
        
        console.log(secondOperand);
        a = Number(firstOperand);
        b = Number(secondOperand);
        switch (currentOperation) {
            case "+":
                result = add(a, b);
                display.textContent = '';
                display.textContent += result;
                break;
            case "-":
                result = subtract(a, b);
                display.textContent = result;
                break;
            case "*":
                result = multiply(a, b);
                display.textContent = result;
                break;
            case "/":
                 if (b == 0) {
                     display.textContent = "You can't divide by zero!";
                 } else {
                     result = divide(a, b);
                     display.textContent = result;
                 }
                 break;
            default:
                return null;    
        }
    }

);




