const inputField = document.querySelector('#input-field');
const addTaskBtn = document.querySelector('#add-task');

addTaskBtn.addEventListener('click', () => {
    console.log(inputField.value);
});

addTaskBtn.addEventListener('dblclick', () => {
    console.log(inputField.value);
});

addTaskBtn.addEventListener('mouseover', () => {
    console.log(inputField.value);
});