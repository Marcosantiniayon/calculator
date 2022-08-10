const operationsDisplay = document.querySelector(".operations");
const resultDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let displayPH = "";
let firstOperand = "";
let secondOperand = "";
let operation = false;
let operation2 = false;
let currentOperand = "";
let operator = "";
let operator2 = "";
let total = 0;
let finished = false;
let innerHT = "";
//let input = "";


operationsDisplay.innerHTML = "";
resultDisplay.innerHTML = "";

buttons.forEach(button => button.addEventListener('click', collectData))
window.addEventListener('keydown', keyboardToButton);

function keyboardToButton(e){
    switch(e.key){
        case "0":
            document.getElementById("0").click();
            break;
        case "1":
            document.getElementById("1").click();
            break;
        case "2":
            document.getElementById("2").click();
            break;       
        case "3":
            document.getElementById("3").click();
            break;
        case "4":
            document.getElementById("4").click();
            break;
        case "5":
            document.getElementById("5").click();
            break;   
        case "6":
            document.getElementById("6").click();
            break;
        case "7":
            document.getElementById("7").click();
            break;
        case "8":
            document.getElementById("8").click();
            break;       
        case "9":
            document.getElementById("9").click();
            break;
        case ".":
            document.getElementById(".").click();
            break;
        case "/":
            document.getElementById("/").click();
            break;     
        case "*":
            document.getElementById("x").click();
            break;   
        case "-":
            document.getElementById("-").click();
            break;
        case "+":
            document.getElementById("+").click();
            break;
        case "Enter":
            document.getElementById("=").click();
            break;       
        case "Backspace":
            document.getElementById("back").click();
            break;
        case "Delete":
            document.getElementById("clear").click();
            break;             
    }
}

function collectData(){
    console.log(this.id);
    innerHT = this.innerHTML;
    if(this.className === "numberBtn"){
        if (finished === true){
            clear();
        }
        if(operation2 === true){
        } else if(operation === true){
            secondOperand += this.innerHTML;
            console.log(firstOperand);
            displayPH = firstOperand + " " + operator + " " + secondOperand;;
        } else if(operation === false && operation2 === false){
            if(finished === true){
                firstOperand = "";
            }
            firstOperand += this.innerHTML;
            //console.log(firstOperand);
            displayPH = firstOperand + " " + operator + " ";
        }
    } else if(this.className === "operatorBtn"){
        finished = false;
        //If there hasnt been an operator selected previously
        if(operation === false){
            //As long as = isn't the entered operator
            if(this.innerHTML != "="){
                operation = true;
            //If "=" is the operator then nothing will occur. Just returns.
            } else{
                return;
            }
        } else {
            operation2 = true; //If theres alrwady been 1 operator, we activate operation2
        }
        if(operation2 === true){
            calculate(innerHT);
        } else if(operation === true && operation2 === false){
            operator = this.innerHTML;
            console.log(operator);
            if(operator === "=")
            {
                displayPH = firstOperand + " " + operator + " ";
                finished = true;
            }else {
                displayPH = firstOperand + " " + operator + " ";
            } 
        }
    } else if(this.className === "clearBtn") {
        clear();
    } else if(this.className === "deleteBtn"){

        //If is on 1st operand
        if(firstOperand != "" && operation === false){
            let array = {}
            array = firstOperand.split('');
            array.pop();
            firstOperand = array.join('');
            displayPH = firstOperand;
            console.log(displayPH);
        }
        //If is on operator
        else if(operation === true && secondOperand === ""){
            console.log("operator");
            let array = {}
            array = displayPH.split('');
            array.pop();
            array.pop();
            array.pop();
            firstOperand = array.join('');
            operator = "";
            operation = false;
            displayPH = firstOperand;

        }
        //If is on 2nd operand
        else if(secondOperand !== ""){
            console.log("2nd operand");
        }else {
            return;
        }
    }

function calculate(innerHT){
    if(operator === "x"){
        operator = innerHT;
        total = Math.round((Number(firstOperand) * Number(secondOperand))*1000)/1000;
    }else if(operator === "/"){
        operator = innerHT;
        total = Math.round((Number(firstOperand) / Number(secondOperand))*1000)/1000;           
    }else if(operator === "-"){
        operator = innerHT;
        total = Math.round((Number(firstOperand) - Number(secondOperand))*1000)/1000;         
    }else if(operator === "+"){
        operator = innerHT;
        total = Math.round((Number(firstOperand) + Number(secondOperand))*1000)/1000;       
    }
    firstOperand = total.toString();
    secondOperand = "";
    operation2 = false;
    if(operator === "="){
        displayPH = total;
        console.log(displayPH);
        operator = "=";
        operation = false;
        finished = true;
    } else{
        console.log(displayPH);
        displayPH = firstOperand + " " + operator;
        console.log(displayPH);
    }

}

function displayOperation(){
    if(operation === true || operation2 === true){
        operationsDisplay.innerHTML = displayPH;
    }else if (operation !== true || operation2 !== true){
        displayPH = "";
    }
}

function displayResult(){
    if(firstOperand !=="" && secondOperand === ""){
        resultDisplay.innerHTML = firstOperand;
    } else if(secondOperand !== ""){
        resultDisplay.innerHTML = secondOperand;
    } else if(firstOperand === "" && secondOperand === ""){
        resultDisplay.innerHTML = "";
    }
}

displayOperation();
displayResult();

function clear(){
    firstOperand = "";
    secondOperand = "";
    operation = false;
    operation2 = false;
    currentOperand = "";
    operator = "";
    operator2 = "";
    total = 0;
    displayPH = "";
    finished = false;
    resultDisplay.innerHTML = "";
    operationsDisplay.innerHTML = "";
    };
}

