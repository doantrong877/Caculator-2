var displayDiv = document.querySelector("#display");
var arr = [];
var result = [];
var checkSign = 0;
function press(num) {
    console.log("checksign : " + checkSign);
    if(checkSign > 0){
         arr = [];
         checkSign = 0;
         console.log("inside if");
    } 
    
    
        
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
            checkSign = 1;
            break;
        case '*':
            result.push(sign);
            console.log(result);
            checkSign = 1;
            break;
        case '-':
            result.push(sign);
            console.log(result);
            checkSign = 1;
            break;
        case '+':
            result.push(sign);
            console.log(result);
            checkSign = 1;
            break;   
    }
  
}

function calculate() {
    try{
        displayDiv.innerText = eval(result.join("")).toString();
        console.log(result);
    } catch {
        displayDiv.innerText = "Error!";
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