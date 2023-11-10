function click_operations(name){
    if (result.innerText == 0){
        result.innerText = name;
    }else{
        result.innerText += name
    }
    n2 = result.innerText;
}

function divide(){
    n1 = parseFloat(result.innerText);
    action = 'divide';
    result.innerText = `
    `;
}
function mult(){
    n1 = parseFloat(result.innerText);
    action = 'mult';
    result.innerText = `
    `;
}
function minus(){
    n1 = parseFloat(result.innerText);
    action = 'minus';
    result.innerText = `
    `;
}
function plus(){
    n1 = parseFloat(result.innerText);
    action = 'plus';
    result.innerText = `
    `;
}

function equals(){
    if (n2 != false){
        n2 = parseFloat(n2);
        if (action == 'divide'){
            result.innerText = n1 / n2;
            n1 = parseFloat(result.innerText);
        }else if (action == 'mult'){
            result.innerText = n1 * n2;
            n1 = parseFloat(result.innerText);
        }else if (action == 'minus'){
            result.innerText = n1 - n2;
            n1 = parseFloat(result.innerText);
        }else if (action == 'plus'){
            result.innerText = n1 + n2;
            n1 = parseFloat(result.innerText);
        }else if (action == false){
            n1 = parseFloat(result.innerText)
            result.innerText = n1;
        }
    }else{
        result.innerText =`
        `
    }
}

function clean(){
    result.innerText = `0
    `;
    n1 = false;
    n2 = false;
    action = false;
}


function change_sign(){
    let temp_n2 = '0';
    temp_n2 = (parseFloat(result.innerText) - 2 * parseFloat(result.innerText)).toString();
    result.innerText = temp_n2;
}

function dectimal_num(){
    if (result.innerText.includes('.') == false){
        result.innerText += '.';   
    }
}

function delete_num(){
    result.innerText = result.innerText.slice(0, result.innerText.length - 1);
}

let n1 = false;
let n2 = false;
let action = false;

let result = document.querySelector('.result'); // get result

const buttons = document.querySelectorAll(".btn");     //pick all buttons

buttons[0].addEventListener('click', clean)
buttons[2].addEventListener('click', divide);
buttons[6].addEventListener('click', mult);
buttons[10].addEventListener('click', minus);
buttons[14].addEventListener('click', plus);
buttons[18].addEventListener('click', equals);
buttons[15].addEventListener('click', change_sign);
buttons[17].addEventListener('click', dectimal_num);
buttons[1].addEventListener('click', delete_num);