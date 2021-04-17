//main variables
const contents = document.getElementById('contents');
const input = document.getElementById('text-field');
const warning = document.getElementById('warning');
const warningText = document.createTextNode('Please enter valid task');


//main functions

const newTask = () => {
    if (input.value === '') {
        warning.appendChild(warningText);
    } else {
        const taskContainer = document.createElement('li');
    taskContainer.setAttribute('class','task-container')

    const checkbox = document.createElement('input');
    checkbox.setAttribute('class','to-do-check')
    checkbox.type = 'checkbox';
    
    const task = document.createTextNode(input.value);
    const taskContent = document.createElement('span');
    taskContent.setAttribute('class', 'task-content')
    taskContent.appendChild(task);

    const checkAndText = document.createElement('div');
    checkAndText.setAttribute('class','check-and-text');
    checkAndText.appendChild(checkbox);
    checkAndText.appendChild(taskContent);

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class','delete-button');
    const xButton = document.createTextNode('x');
    deleteButton.appendChild(xButton);
    deleteButton.addEventListener('click', () => {
        taskContainer.parentNode.removeChild(taskContainer);
        clearDisplay();
    }
    )

    taskContainer.appendChild(checkAndText);
    taskContainer.appendChild(deleteButton)
    contents.appendChild(taskContainer);
    input.value = '';

    clearDisplay();
    }
}

//warning conditions
document.getElementById('text-field').addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        if (input.value === '') {
            warning.appendChild(warningText);
        } else {
            newTask();
            warning.innerHTML = '';
        }
    }
})


//hide/show text field
const toggleTextField = () => {
    const toggle = document.getElementById('toggle');
    const typeAhead = document.getElementById('type-ahead');
    if(toggle.checked === true) {
        typeAhead.style.display = "inline";
    } else {
        typeAhead.style.display = "none";
    }
}

//clear
const clearList = () => {
    while(contents.firstChild) {
        contents.removeChild(contents.firstChild)
    }
    clearDisplay();
}

const clearDisplay = () => {
    const clearAll = document.getElementById('clear-all');
    if(contents.childElementCount === 0) {
        clearAll.style.display = 'none';
    } else {
        clearAll.style.display = 'block';
    }
}