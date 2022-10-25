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