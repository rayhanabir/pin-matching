function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin
    }
    else{
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    
};
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousCalcInput = calcInput.value;
        const newCalcInput = previousCalcInput + number;
        calcInput.value = newCalcInput;
    }
    
  
});

// verify pin function 

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const success = document.getElementById('verify-success');
    const fail = document.getElementById('verify-fail') ;
    if(pin == typedPin){
       
        success.style.display ='block';
        fail.style.display = 'none';
    }
    else{
        
        fail.style.display = 'block' 
        success.style.display = 'none' ;
    }
}