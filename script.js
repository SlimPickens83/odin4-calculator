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


buttons.forEach((button) => {
	button.addEventListener('click', () => {
        input = button.id;          
                        
		if (input === "multiply" || input === "divide" || input === "subtract" || input === "add") {
            
            operand = input;            

            calcNumbers.push(makeNum);
                console.log(`makeNum when operand is pushed: ${makeNum}`);
                console.log(`calcNumbers when operand is pushed: ${calcNumbers}`);

            // if (an operand has already been pressed) {
            //     -evaluate first two digits and display result
            //     -display new operator following this result
            // }
                
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
                    console.log(operandTrue);
                result = calculate(calcNumbers[0], operand, calcNumbers[1]);
                if(calcNumbers.length > 1) {
                    calcNumbers.shift();
                }
                calcNumbers.shift();
                calcNumbers.unshift(result);
                    console.log(`calcNumbers: ${calcNumbers}`);

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

                console.log("**** END ****");

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

                console.log(`This is what calcNumbers looks like before running calculate(): ${calcNumbers}`);

            for (i = 0; i < calcNumCount; i++) {
                result = calculate(calcNumbers[0], operand, calcNumbers[1]);
                    console.log(`Result of 'calculate': ${result}`);
                if (i > 0) {
                    calcNumbers.shift();
                }
                calcNumbers.shift();
                calcNumbers.unshift(result);
                    console.log(`calcNumbers: ${calcNumbers}`);
            }

            let x = result.toString();
            displayMemory.push(x);
            display.textContent = displayMemory.join("");
            
            }

            clearThis(calcNumbers);
            clearThis(currentNum);

        } else if (input === "clearButton") {
            clearThis(displayMemory);
                console.log(displayMemory);
            clearThis(calcNumbers);
            clearThis(currentNum);

            display.textContent = displayMemory;

        } else {
            if(equalsTrue) {
                clearThis(displayMemory);
                equalsTrue = false;
            }

		    input = Number(button.id);
               	console.log(`This is the initial value for displayMemory: ${displayMemory}`);
               	console.log(`This is how many numbers are currently in displayMemory: ${displayMemory.length}`);
                console.log(`This is the initial value of currentNum: ${currentNum}`);

            currentNum.push(input);
                console.log(`This is currentNum after pushing the input value: ${currentNum}`);

            let a = currentNum.join("");
            makeNum = Number(a);
                console.log(`makeNum: ${makeNum}`);

            if(numTrue === true) {
                displayMemory.pop();

            }

            displayMemory.push(currentNum.join(""));                    
               	console.log(`This is the value of displayMemory after pushing the updated currentNum: ${displayMemory}`);
            display.textContent = displayMemory.join("");

            numTrue = true;

                console.log("**** END ****");                    

		    }
        });
});


// These are the functions utilized by the code.

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