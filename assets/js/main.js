const display = document.querySelector('.display');
display.focus();
document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('btn')){
        recebeNum(el.innerText);
        display.focus();
    }

    if(el.classList.contains('btn.clear')){
        clearDisplay();
    }

    if(el.classList.contains('btn.clearLast')){
        clearLast();
    }

    if(el.classList.contains('btn.eq')){
        let teste = display.value.slice(0,-1);
        display.value = teste;
        realizaConta();
    }
})

display.addEventListener('keypress', function(e){
    if(e.keyCode===13){realizaConta()}
})

display.addEventListener('keypress', function(e){
    if(e.keyCode===8){clearLast()}
})

display.addEventListener('keypress', function(e){
    if(e.keyCode===32){clearDisplay()}
})

function realizaConta(){
    try{
        if(!display.value) {alert("Informar uma operação válida"); return}
        let conta = display.value;
        let conta2 = eval(conta);
        display.value = conta2;
    }
    catch(e){
        alert("Informar uma operação válida"); 
        return;
    }
}

function clearLast(){
    let num = display.value;
        let num2 = num.slice(0,-2)
        clearDisplay();
        recebeNum(num2)
}

function clearDisplay(){
    display.value="";
}

function recebeNum(num){
    display.value += num;
}