const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const add = document.getElementById("plus");
const subtract = document.getElementById("subtract");
const equals = document.getElementById("equals");
const clear = document.getElementById("clearButton");

const buttons = document.querySelectorAll('button');

let num1;
let num2;
let operand;

let input;

let display;

// for all buttons, i want to add an eventlistener tied to that button's ID

buttons.forEach((button) => {
    button.addEventListener('click', () => 
	    {
	 	    input = button.id;
            
            if(typeof input === "number") {
                if(typeof num1 !== "number") {
                    num1 = input;
                } else {
                    num2 = input;
                }
            } else if (input === "multiply" || input === "divide" || input === "subtract" || input === "add") {
                operand = input;
            } else if (input === "equals") {
                calculate(num1, operand, num2);
            }
        });
});


function calculate(x, y, z) {
    let result;

    if (y === "add") {
        result = add(x, z);
    } else if (y === "subtract") {
        result = subtract(x, z);
    } else if (y === "multiply") {
        result = multiply(x, z);
    } else if (y === "divide") {
        result = divide(x, z);
    } else {
        result = "ERROR";
    }
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function mulitply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}