const outputField = document.querySelector('#output');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');
// const btnTwo = document.querySelector('#two');



const display = (x) => {
    outputField.value = outputField.value + x;
    console.log(outputField.value);
};

// const clear = () => {
//     outputField.value = null;
// };

clearBtn.addEventListener('click', () => {
    outputField.value = null;
});

equalBtn.addEventListener('click', () => {
    outputField.value = '';
});



// btnOne.addEventListener('click', () => {
//     display
// });
// btnTwo.addEventListener('click', () => {
//     console.log(btnTwo.value);
// });







// const three = document.querySelector('one');
// const four = document.querySelector('one');
// const five = document.querySelector('one');
// const six = document.querySelector('one');
// const seven = document.querySelector('one');
// const eight = document.querySelector('one');
// const nine = document.querySelector('one');
// const one = document.querySelector('one');
// const one = document.querySelector('one');
// const one = document.querySelector('one');
// const one = document.querySelector('one');