
class To_do{
    constructor(action){
        this.action = action
    }

    add_action(){
        ctr += 1
        let div = document.createElement('div')
        div.setAttribute('id', `#single_check_box${ctr}`);
        document.querySelector('.actions_fieldset').appendChild(div); 
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `action${ctr}`);
        checkbox.setAttribute('class', `checkbox`);
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

    cross_action(){
        
    }

    
}

let action = document.querySelector(".input");
let button = document.querySelector(".btn");
let checkboxes = document.querySelector(".checkbox");
/*let checkboxes = document.querySelector("")*/
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
    let to_do = new To_do(action.value);
    let cachedArrayinFunction = JSON.parse(localStorage.getItem('ToDoList'));
    if (!Array.isArray(cachedArrayinFunction)) {
        cachedArrayinFunction = [];
    }
    cachedArrayinFunction.push(action.value);
    localStorage['ToDoList'] = JSON.stringify(cachedArrayinFunction);
    to_do.add_action();
    action.value = "";
    console.log(checkboxes);
} 




button.addEventListener('click', new_action);