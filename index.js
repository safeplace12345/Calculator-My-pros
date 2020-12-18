const screen = document.getElementById('screen')
const grayBtn = document.querySelectorAll('.btn-secondary')
const warningBtn = document.querySelectorAll('.btn-warning')
const equalBtn = document.getElementById('equalbtn');
const clearBtn = document.getElementById('clearbtn');

// console.log(grayBtn)

const displayValue = (e) => {
    // Add another function if the value has a digit after a non word char
if(screen.value.match(/[+]\d$/)){
            evaluation()
    } 
    screen.value += e.value;
}
const clearScr = () => {
    screen.value = '';
}
const evaluation = () => {
    screen.value = eval(screen.value).toFixed(2)
    
}


