// Declarations.

const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const add = document.getElementById("plus");
const subtract = document.getElementById("subtract");
const equals = document.getElementById("equals");
const clear = document.getElementById("clearButton");
const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');

let operand;
let operandLiteral;
let numTrue = false;
let operandTrue = false;
let equalsTrue = false;
let input;
let displayMemory = [];
let calcNumbers = [];
let calcNumber1 = [];
let calcNumber2 = [];
let currentNum = [];
let makeNum;


// Button presses send digits and operands both to display memory and working memory.
// Will accept numbers of varying length.
// Calculator works for all operands and allows for multiple consecutive operations.


buttons.forEach((button) => {
	button.addEventListener('click', () => {
        input = button.id;          
                        
		if (input === "multiply" || input === "divide" || input === "subtract" || input === "add") {
            
            operand = input;            

            calcNumbers.push(makeNum);

            if (input === "multiply") {
                operandLiteral = " * "
            } else if (input === "divide") {
            	operandLiteral = " / ";
            } else if (input === "subtract") {
            	operandLiteral = " - ";
            } else if (input === "add") {
            	operandLiteral = " + ";
            }

            if (operandTrue === true) {    
                result = calculate(calcNumbers[0], operand, calcNumbers[1]);
                
                if(calcNumbers.length > 1) {
                    calcNumbers.shift();
                }
                
                calcNumbers.shift();
                calcNumbers.unshift(result);

                let x = result.toString();
                clearThis(displayMemory);
                displayMemory.push(x);
                displayMemory.push(operandLiteral);
                display.textContent = displayMemory.join("");
            
            } else {
                    console.log(operandTrue);
                displayMemory.push(operandLiteral);
                display.textContent = displayMemory.join("");

                operandTrue = true;
            
            }

            numTrue = false;
            clearThis(currentNum);

        } else if (input === "equals") {
            calcNumbers.push(makeNum);

            let result;
            let calcNumCount = calcNumbers.length - 1;

            equalsTrue = true;

            if (operandTrue === false) {
                displayMemory.push(` = ${makeNum}`);
                display.textContent = displayMemory.join("");

            } else {    
                operandTrue = false;            
            
                displayMemory.push(" = ");

                for (i = 0; i < calcNumCount; i++) {
                    result = calculate(calcNumbers[0], operand, calcNumbers[1]);
                    
                    if (i > 0) {
                        calcNumbers.shift();
                    }
                    
                    calcNumbers.shift();
                    calcNumbers.unshift(result);
                    
                }

            let x = result.toString();
            displayMemory.push(x);
            display.textContent = displayMemory.join("");
            
            }

            clearThis(calcNumbers);
            clearThis(currentNum);

        } else if (input === "clearButton") {
            clearThis(displayMemory);
            clearThis(calcNumbers);
            clearThis(currentNum);

            display.textContent = displayMemory;

        } else {
            if(equalsTrue) {
                clearThis(displayMemory);
                equalsTrue = false;
            }

		    input = Number(button.id);
            currentNum.push(input);
                
            let a = currentNum.join("");
            makeNum = Number(a);

            if(numTrue === true) {
                displayMemory.pop();

            }

            displayMemory.push(currentNum.join(""));                    
            display.textContent = displayMemory.join("");

            numTrue = true;                 

	    }
    });
});


// Function list.

function calculate(x, y, z) {
    let result;

    if (y === "add") {
        result = addition(x, z);
    } else if (y === "subtract") {
        result = subtraction(x, z);
    } else if (y === "multiply") {
        result = multiplication(x, z);
    } else if (y === "divide") {
        result = division(x, z);
    } else {
        result = "ERROR";
    }

    return result;
}

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    if (y === 0) {
        return "If you want it to divide, then ante up. If you want to play it cheap, be on welfare the whole winter. I don't want no volunteers, I don't want no mates, there's just too many captains on this island. A non-zero divisor for me by myself. For that you get the head, the tail, the whole damn thing.";
    } else {
        return x / y;
    }
}

function clearThis(x) {
    x.splice(0, x.length);
}