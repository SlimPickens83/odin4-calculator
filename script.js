const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const add = document.getElementById("plus");
const subtract = document.getElementById("subtract");
const equals = document.getElementById("equals");
const clear = document.getElementById("clearButton");

const buttons = document.querySelectorAll('button');

let num1 = [];
let num2 = [];
let operand;

let input;
let operandPush = false;

let display = [];
let displayCount = display.length - 1;
let emptyDisplay = display.slice();
let calcNumbers = [];
let calcNumCount = calcNumbers.length - 1;
let currentNum = [];

// for all buttons, i want to add an eventlistener tied to that button's ID
// number inputs should build up in an array whose contents update in the display box in real time
// those contents need to be saved as a number in a separate variable while display contains and shows
// all digits entered for each number as well as any operands


buttons.forEach((button) => {
    button.addEventListener('click', () => 
	    {
	 	    input = button.id;
            
            if(typeof input === "number") {
                currentNum.push(input);

                display = emptyDisplay;

                for(i = 0; i < currentNum.length; i++) {
                    display.push(currentNum[i]);
                }
                
            } else if (input === "multiply" || input === "divide" || input === "subtract" || input === "add") {
                let makeNum = Number(currentNum.join(""));
                let newNum = currentNum.slice();
                
                operand = input;
                display.push(operand);

                calcNumbers.push[makeNum];
                currentNum = newNum;

            } else if (input === "equals") {
                let result;

                display = emptyDisplay;

                for(i = 0; i < calcNumCount; i++) {
                    result = calculate(calcNumbers[i], operand, calcNumbers(i + 1));

                    display.push(result);
                }
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

    return result;
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