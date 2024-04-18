// Function to append value to display
function appendValue(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to remove the last character from the display
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to toggle between standard and scientific modes
function toggleMode() {
    const modeToggle = document.getElementById('mode-toggle');
    const keys = document.querySelectorAll('.keys button');

    if (modeToggle.checked) {
        // Activate scientific mode
        keys.forEach(button => button.style.display = 'block');
    } else {
        // Deactivate scientific mode
        keys.forEach(button => {
            if (button.classList.contains('function-btn')) {
                button.style.display = 'none';
            }
        });
    }
}

// Function to calculate square root
function calculateSquareRoot() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sqrt(value);
}

// Function to calculate square
function calculateSquare() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(value, 2);
}

// Function to calculate inverse
function calculateInverse() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / value;
}

// Function to calculate logarithm
function calculateLog() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log10(value);
}

// Function to calculate natural logarithm
function calculateNaturalLog() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log(value);
}

// Function to calculate sine
function calculateSin() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sin(value * Math.PI / 180);
}

// Function to calculate cosine
function calculateCos() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.cos(value * Math.PI / 180);
}

// Function to calculate tangent
function calculateTan() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.tan(value * Math.PI / 180);
}

// Function to calculate exponentiation
function calculateExponential() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.exp(value);
}

// Add event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = /[0-9\+\-\*\/\=\.\b]|Enter|Backspace/; // Regular expression for valid keys

    if (validKeys.test(key)) {
        event.preventDefault(); // Prevent default action for keys

        if (key === '=') {
            calculate();
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            backspace(); // Call backspace() to remove the last character
        } else {
            appendValue(key);
        }
    }
});
