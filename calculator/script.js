
plus = (a, b) => a+b;
minus = (a,b) => a-b;
divide = (a,b) => a/b;
multiply = (a,b)=> a*b;

const syms = ["+", "-", "/", "*"];
const controlChars = ["=", "clear"];

for (btn of document.querySelectorAll("button")){
    btn.addEventListener("click", sendBtn);
}
const inputBox = document.querySelector("#input-box");
const keys = document.querySelector(".keys");
const body = document.querySelector("body");

//num1, num2, op
let inputArgs = [];


//Takes sym (not list) and numbers a b
function operate(arr){

    res = null;
    a = Number(arr[0]);
    b = Number(arr[1]);
    sym = arr[2];

    switch (sym){
        case "+":
            res= plus(a,b);
            break;
        case "-":
            res= minus(a,b);
            break;
        case "/":
            res= divide(a,b);
            if (b==0){
                alert("Division by Zero? How dare you! Deleting website...")
                const root = document.getRootNode()
                root.lastChild.remove()
            }
            break;
        case "*":
            res= multiply(a,b);
            break;
    }
    res = Math.round(res*100)/100;
    inputBox.textContent = res;
    inputArgs.fill(undefined);
    return res;
}

function sendBtn(e){
    const btn = e.target;
    char = btn.textContent;

    onInput(char);
}

function safeAssign(a, ind){
    inputArgs[ind] = (inputArgs[ind] ?? "") +  a;

}

function onInput(char){
    console.log("onInput got: " + char);
    if (controlChars.includes(char)){
        switch (char){
            case "clear":
                inputArgs.fill(undefined);
                console.log("checking inputArgs is clear: "+ String(inputArgs));
                inputBox.textContent = "Input:";
                return;
            case "=":
                result = operate(inputArgs);
                //inputArgs[0] = result;
                return;
        }
    }
    len = inputArgs.length;


    let isSym = syms.includes(char);
    if (inputArgs[2] == undefined && !isSym){
        safeAssign(char, 0)
        inputBox.textContent = inputArgs[0];
    }
    else if (isSym){
        if (inputArgs[2] != undefined && inputArgs[1] != undefined){
            inputArgs[0]=operate(inputArgs);
        }
        inputArgs[2] = char;
    }
    else if ( inputArgs[0] != undefined && inputArgs[2] != undefined && !isSym){
        safeAssign(char, 1);
        
    }
    inputBox.textContent = `${inputArgs[0]??""}${inputArgs[2]??""}${inputArgs[1]??""}`;
    console.log(`num1:${inputArgs[0]} num2:${inputArgs[1]} op:${inputArgs[2]}`)
}

