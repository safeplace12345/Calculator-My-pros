const screen = document.getElementById('screen')
const grayBtn = document.querySelectorAll('.btn-secondary')
const warningBtn = document.querySelectorAll('.btn-warning')
const equalBtn = document.getElementById('equalbtn');
const clearBtn = document.getElementById('clearbtn');

console.log(grayBtn)
if(screen.value === null){
    screen.value += 0;
}else{

function displayValue(e){
    screen.value += e.value;
}
function clearScr(){
    screen.value = '0';
}
function evaluation(){
    screen.value = eval(screen.value)
    
}
}

// console.log(button6)


// displayValues(grayBtn, showValue());

// for(var i = 0 ;i < btn.length; i++){
//     let number = btn[i].getAttribute('data-num')
//     btn[i].addEventListener('click',function(){
//     screen.value += number;
// })}

// // equalbtn.addEventListener('click',function(){
// //     let value = eval(screen.value)
// //     screen.value = value;
// // })
// clearBtn.addEventListener('click',function(){
//     screen.value += '';
// })
// console.log(equalBtn)