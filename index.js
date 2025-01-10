const input = document.querySelector(".answer .input");
let num1 = "";
let num2 = "";
let operation;

const acButton = document.querySelector(".AC button");

acButton.addEventListener("click", () => {
    input.textContent = ""
    num1 = ""
    num2 = ""
    operation = ""
})

const signButton = document.querySelector(".sign button");

signButton.addEventListener("click", () => {
    if (input.textContent === "0") {
        input.textContent = "-";
    } else {
        input.textContent = "-" + input.textContent;
    }})

const percentageButton = document.querySelector(".percent button");

percentageButton.addEventListener("click", () => {
    input.textContent = parseFloat(input.textContent) / 100;
})

const divisonButton = document.querySelector(".division button");

divisonButton.addEventListener("click", () => {
    num1 = input.textContent;
    input.textContent = "";
    operation = "/"
})

const sevenButton = document.querySelector(".seven button");
sevenButton.addEventListener("click", () => {
    input.textContent += "7"
})

const  eightButton = document.querySelector(".eight button");
eightButton.addEventListener("click", () => {
    input.textContent += "8"
})

const nineButton = document.querySelector(".nine button");
nineButton.addEventListener("click", () => {
    input.textContent += "9"
})

const multiplyButton = document.querySelector(".multiply button");

multiplyButton.addEventListener("click", ()=> {
    num1 = input.textContent;
    input.textContent = ""
    operation = "*"
})

const  fourButton = document.querySelector(".four button");
fourButton.addEventListener("click", () => {
    input.textContent += "4"
})


const  fiveButton = document.querySelector(".five button");
fiveButton.addEventListener("click", () => {
    input.textContent += "5"
})

const  sixButton = document.querySelector(".six button");
sixButton.addEventListener("click", () => {
    input.textContent += "6"
})

const minusButton = document.querySelector(".minus button");

minusButton.addEventListener("click", ()=> {
    num1 = input.textContent;
    input.textContent = ""
    operation = "-"
})

const  oneButton = document.querySelector(".one button");
oneButton.addEventListener("click", () => {
    input.textContent += "1"
})

const  twoButton = document.querySelector(".two button");
twoButton.addEventListener("click", () => {
    input.textContent += "2"
})

const  threeButton = document.querySelector(".three button");
threeButton.addEventListener("click", () => {
    input.textContent += "3"
})

const addButton = document.querySelector(".plus button");

addButton.addEventListener("click", ()=> {
    num1 = input.textContent;
    input.textContent = ""
    operation = "+"
})

const deleteButton = document.querySelector(".delete button");
deleteButton.addEventListener("click", ()=> {
    input.textContent = input.textContent.slice(0, -1);
})

const zeroButton = document.querySelector(".zero button");

zeroButton.addEventListener("click", ()=> {
    input.textContent += "0"
})

const decimalButton = document.querySelector(".dot button");

decimalButton.addEventListener("click", ()=> {
    input.textContent += ".";
})

const checkButton = document.querySelector(".check button");

checkButton.addEventListener("click", 
    () => {
    num1 = parseFloat(num1);
    num2 = parseFloat(input.textContent);
    
    input.textContent = operate(operation, num1, num2);
})

function operate(operation, num1, num2) {

    switch(operation) {
        case "+":
            return add(num1, num2)

        case "-":
            return subtract(num1, num2)

        case "*":
            return multiply(num1, num2)

        case "/":
            if(num2 === 0){
                return "Zero Division Error";
            }
            return divide(num1, num2)
        
        default:
            return num2;

    }
}

function add(num1, num2){
    return num1 + num2
}


function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}