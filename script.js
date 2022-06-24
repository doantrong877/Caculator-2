var displayDiv = document.querySelector("#display");
var arr = [];
var result = [];
function press(num) {

    if(result.length != 0){
        if(isNaN(result[result.length-1])){
            displayDiv.innerText = '0';
        };
    };
        
    arr.push(num);
    displayDiv.innerText = arr.join("");
    result.push(num);
    console.log(arr.join(""));
    
}

function setOP(sign) {

    switch (sign) {
        case '/':          
            result.push(sign);
            console.log(result);
            break;
        case '*':
            result.push(sign);
            console.log(result);
            break;
        case '-':
            result.push(sign);
            console.log(result);
            break;
        case '+':
            result.push(sign);
            console.log(result);
            break;   
    }
  
}

function calculate() {
    try{
        displayDiv.innerText = eval(result.join("")).toString();
    } catch {
        console.log("there was an error in the calculation");
    }
    
    arr = [];
    result = [];
}

function clr() {
    displayDiv.innerText = '0';
    arr = [];
    result = [];
    
}