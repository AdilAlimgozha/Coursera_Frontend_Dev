
class To_do{
    constructor(action){
        this.action = action
    }

    add_action(){
        ctr += 1
        let div_outer = document.createElement('div');
        div_outer.setAttribute('id', `checkbox_div_outer${ctr}`);
        div_outer.setAttribute('class', `checkbox_div_outer`);
        document.querySelector('.actions_fieldset').appendChild(div_outer);

        let div = document.createElement('div');
        div.setAttribute('id', `#single_check_box${ctr}`);
        div.setAttribute('class', `checkbox_div`)
        document.querySelector(`#checkbox_div_outer${ctr}`).appendChild(div);

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `action${ctr}`);
        checkbox.setAttribute('class', `checkbox`);
        document.getElementById(`#single_check_box${ctr}`).appendChild(checkbox);

        let label = document.createElement('label');
        label.setAttribute('for', `action${ctr}`);
        label.innerText = this.action;
        document.getElementById(`#single_check_box${ctr}`).appendChild(label);

        let del = document.createElement('button');
        del.innerText = 'delete';
        del.setAttribute('id', `del_button${ctr}`);
        del.setAttribute('class', 'del_button');
        document.querySelector(`#checkbox_div_outer${ctr}`).appendChild(del);
    }
}

let action = document.querySelector(".input");
let button = document.querySelector(".btn");
let checkboxes = document.getElementsByClassName('checkbox');
let del_buttons = document.getElementsByClassName("del_button");
let divs = document.getElementsByClassName("checkbox_div_outer");
let ctr = 0;


const storedValue = localStorage.getItem('ToDoList');
if (storedValue) {
    cachedArray = JSON.parse(storedValue);
    if (!Array.isArray(cachedArray)) {
        cachedArray = [];
    }
    let to_do_list = cachedArray ? cachedArray.map(item => {
        if (item != null) {
            let to_do_instance = new To_do(item);
            to_do_instance.add_action();
            return to_do_instance;
        }
    }) : [];

    to_do_list.forEach(todo => {
        let to_do = new To_do(todo.item);
    });
}

function new_action(){
    if (action.value != ""){
        let to_do = new To_do(action.value);
        let cachedArrayinFunction = JSON.parse(localStorage.getItem('ToDoList'));
        if (!Array.isArray(cachedArrayinFunction)) {
            cachedArrayinFunction = [];
        }
        cachedArrayinFunction.push(action.value);
        localStorage['ToDoList'] = JSON.stringify(cachedArrayinFunction);
        to_do.add_action();
        action.value = "";
        checkboxes = document.getElementsByClassName('checkbox');
        del_buttons = document.getElementsByClassName("del_button");
        divs = document.getElementsByClassName("checkbox_div_outer");
        cross_del()
        }
}

button.addEventListener('click', new_action);
cross_del()

function cross_del(){
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].addEventListener('change', function(event){
            let checkbox = event.target;

            if (checkbox.checked){
                checkbox.labels[0].innerHTML = '<s>' + checkbox.labels[0].innerText + '</s>';
            }else{
                checkbox.labels[0].innerHTML = checkbox.labels[0].innerText;
            }
        });
    }

    for (var i = 0; i < del_buttons.length; i++){
        del_buttons[i].addEventListener('click', function(event){
            let button = event.target;
            let btn_id_num = button.id.replace(/[^0-9]/g, '');

            for (j = 0; j < divs.length; j++){
                let div_id_num = divs[j].id.replace(/[^0-9]/g, '');

                if (btn_id_num == div_id_num){
                    let text = checkboxes[j].labels[0].innerText;
                    divs[j].remove();
                    button.remove();
                    let cachedArray = JSON.parse(localStorage.getItem('ToDoList'));
                    if (cachedArray.includes(text)){
                        
                        for (let k = 0; k < cachedArray.length; k++){ 
                            if (cachedArray[k] == text) { 
                                cachedArray.splice(k, 1); 
                            } 
                        } 

                    }
                    console.log(cachedArray);
                    localStorage['ToDoList'] = JSON.stringify(cachedArray);
                    break;
                }
            }
        })
    }
}