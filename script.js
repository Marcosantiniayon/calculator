const operations = document.querySelector(".operations");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
let input = "";
let newInput = ""
// let Btn1 = document.querySelector("#1");
// let Btn2 = document.querySelector("#2");
// let Btn3 = document.querySelector("#3");
// let Btn4 = document.querySelector("#4");
// let Btn5 = document.querySelector("#5");
// let Btn6 = document.querySelector("#6");
// let Btn7 = document.querySelector("#7");
// let Btn8 = document.querySelector("#8");
// let Btn9 = document.querySelector("#9");
// let Btn0 = document.querySelector("#0");
// let BtnPer = document.querySelector("#.");
// let BtnDiv = document.querySelector("#1");
// let BtnMult = document.querySelector("#1");
// let BtnSub = document.querySelector("#-");
// let BtnAdd = document.querySelector("#+");
// let BtnEqu = document.querySelector("#=");





operations.innerHTML = "";
result.innerHTML = "result";

buttons.forEach(button => button.addEventListener('click', collectData))
function collectData(){
    if(this.id === "="){
        input = input + this.innerHTML;;
        console.log(input);
        operations.innerHTML = input;
    }else if(this.id === "clear"){
        input = "";
        console.log(input);
        operations.innerHTML = input;
    }else if(this.id === "0"){
        if(input === ""){
            input = "";
        } else {
            input = input + this.innerHTML;
            console.log(input);
            operations.innerHTML = input;
        }
    }else if(this.id === "back"){
        input = input.slice(0,-1);
        console.log(input);
        operations.innerHTML = input;
    }else {
        input = input + this.innerHTML;
        console.log(input);
        operations.innerHTML = input;

    }
}

