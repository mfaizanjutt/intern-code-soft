let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('result').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        displayValue = '0';
    }
}
