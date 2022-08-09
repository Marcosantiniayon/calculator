const operationsDisplay = document.querySelector(".operations");
const resultDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let firstOperand = "";
let secondOperand = "";
let operation = false;
let operation2 = false;
let currentOperand = "";
let operator = "";
let operator2 = "";
let total = 0;
let finished = false;
//let input = "";


operationsDisplay.innerHTML = "";
resultDisplay.innerHTML = "result";

buttons.forEach(button => button.addEventListener('click', collectData))

function collectData(){
    if(this.className === "numberBtn"){
        if (finished === true){
            clear();
        }
        if(operation2 === true){
            console.log("Second operation");
        } else if(operation === true){
            console.log("First operation");
            secondOperand += this.innerHTML;
            console.log(firstOperand);
            operationsDisplay.innerHTML = firstOperand + " " + operator + " " + secondOperand;;
        } else if(operation === false && operation2 === false){
            if(finished === true){
                firstOperand = "";
            }
            console.log("No operation");
            firstOperand += this.innerHTML;
            console.log(firstOperand);
            operationsDisplay.innerHTML = firstOperand + " " + operator + " ";
        }
    } else if(this.className === "operatorBtn"){
        finished = false;
        if(operation === false){
            if(this.innerHTML != "="){
                operation = true;
            } else{
                return;
            }
        } else {
            operation2 = true;
        }
        if(operation2 === true){
            console.log("Second operation");
            // Calculate first operation
            if(operator === "x"){
                operator = this.innerHTML;
                total = Number(firstOperand) * Number(secondOperand);
                firstOperand = total.toString();
                secondOperand = "";
                operation2 = false;
                if(operator === "="){
                    operationsDisplay.innerHTML = total;
                    operator = "=";
                    operation = false;
                    finished = true;
                } else{
                    operationsDisplay.innerHTML = firstOperand + " " + operator;
                }
            }else if(operator === "/"){
                operator = this.innerHTML;
                total = Math.round((Number(firstOperand) / Number(secondOperand))*1000)/1000;
                firstOperand = total.toString();
                secondOperand = "";
                operation2 = false;
                if(operator === "="){
                    operationsDisplay.innerHTML = total;
                    operator = "=";
                    operation = false;
                    finished = true;
                } else{
                    operationsDisplay.innerHTML = firstOperand + " " + operator;
                }            
            }else if(operator === "-"){
                operator = this.innerHTML;
                total = Number(firstOperand) - Number(secondOperand);
                firstOperand = total.toString();
                secondOperand = "";
                operation2 = false;
                if(operator === "="){
                    operationsDisplay.innerHTML = total;
                    operator = "=";
                    operation = false;
                    finished = true;
                } else{
                    operationsDisplay.innerHTML = firstOperand + " " + operator;
                }            
            }else if(operator === "+"){
                operator = this.innerHTML;
                total = Number(firstOperand) + Number(secondOperand);
                firstOperand = total.toString();
                secondOperand = "";
                operation2 = false;
                if(operator === "="){
                    operationsDisplay.innerHTML = total;
                    operator = "=";
                    operation = false;
                    finished = true;
                } else{
                    operationsDisplay.innerHTML = firstOperand + " " + operator;
                }            
            }
        } else if(operation === true && operation2 === false){
            console.log("First operation");
            operator = this.innerHTML;
            console.log(operator);
            if(operator === "=")
            {
                operationsDisplay.innerHTML = firstOperand + " " + operator + " ";
                finished = true;
            }else {
                operationsDisplay.innerHTML = firstOperand + " " + operator + " ";
            } 
        }
    } else if(this.className === "clearBtn") {
        clear();
    } else if(this.className === "deleteBtn"){

        //If is on 1st operand
        if(firstOperand != "" && operation === false){
            console.log("1st operand");
            let array = {}
            array = firstOperand.split('');
            array.pop();
            firstOperand = array.join('');
            operationsDisplay.innerHTML = firstOperand;
        }
        //If is on operator
        else if(operation === true && secondOperand === ""){
            console.log("operator");
            let array = {}
            array = operationsDisplay.innerHTML.split('');
            array.pop();
            array.pop();
            array.pop();
            firstOperand = array.join('');
            operator = "";
            operation = false;
            operationsDisplay.innerHTML = firstOperand;

        }
        //If is on 2nd operand
        else if(secondOperand !== ""){
            console.log("2nd operand");
        }else {
            return;
        }
    };

function clear(){
    firstOperand = "";
    secondOperand = "";
    operation = false;
    operation2 = false;
    currentOperand = "";
    operator = "";
    operator2 = "";
    total = 0;
    operationsDisplay.innerHTML = "";
    finished = false;
    };
}

