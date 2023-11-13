class To_do{
    constructor(action){
        this.action = action
    }

    add_action(){
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `action${ctr}`)
        checkbox.setAttribute('class', `checkbox`)
        document.getElementById(`#single_check_box${ctr}`).appendChild(checkbox);
        let label = document.createElement('label');
        label.setAttribute('for', `action${ctr}`);
        label.innerText = this.action;
        document.getElementById(`#single_check_box${ctr}`).appendChild(label);
        /*input.checkbox{
            width : ;
            height : /*desired height;
        }*/
    }

    
}

let action = document.querySelector(".input");
let button = document.querySelector(".btn");
let ctr = 0

function new_action(){
    ctr += 1
    let div = document.createElement('div')
    div.setAttribute('id', `#single_check_box${ctr}`);
    document.querySelector('.actions_fieldset').appendChild(div);
    let to_do = new To_do(action.value);
    to_do.add_action();
} 


button.addEventListener('click', new_action);