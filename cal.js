let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendDot() {
    if (currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + '.';
    updateDisplay();
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = null;
    previousOperand = '';
    updateDisplay();
}
function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = currentOperand;
}