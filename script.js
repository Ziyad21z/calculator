let firstNumber;
let secondNumber;
let operater;
let result = 0;

const screen = document.querySelector('.screen')
const upperScreen = document.querySelector('.upperScreen')
const lowerScreen = document.querySelector('.lowerScreen')

document.querySelector('.clear').addEventListener('click', () => {
    upperScreen.textContent = ''
    lowerScreen.textContent = ''
    result = 0;
    firstNumber = 0;
    secondNumber = 0;
})

document.querySelector('.sum').addEventListener('click', () => operater = '+')
document.querySelector('.subtract').addEventListener('click', () => operater = '-')
document.querySelector('.multiply').addEventListener('click', () => operater = '*')
document.querySelector('.divide').addEventListener('click', () => operater = '/')
document.querySelector('.operate').addEventListener('click', () => {
    operate(firstNumber, secondNumber, operater)
})

function display(item) {
    upperScreen.innerText += item
}

function operate() {
    let text = upperScreen.textContent;
    let splitedtext = text.split(/[-|+|x|÷]+/);
    firstNumber = splitedtext[0]
    secondNumber = splitedtext[1]
    switch (operater) {
        case '+':
            result = sum(firstNumber, secondNumber)
            break;
        case '/':
            result = divide(firstNumber, secondNumber)
            break;
        case '*':
            result = multiply(firstNumber, secondNumber)
            break;
        case '-':
            result = subtract(firstNumber, secondNumber)
            break;
    }
    firstNumber = result;
    lowerScreen.innerText = result
}

function sum(a, b) {
    let convertedA = parseInt(a)
    let convertedB = parseInt(b)
    return convertedA + convertedB
}

function subtract(a, b) {
    let convertedA = parseInt(a)
    let convertedB = parseInt(b)
    return convertedA - convertedB
}

function multiply(a, b) {
    let convertedA = parseInt(a)
    let convertedB = parseInt(b)
    return convertedA * convertedB
};

function divide(a, b) {
    let convertedA = parseInt(a)
    let convertedB = parseInt(b)
    return convertedA / convertedB
}