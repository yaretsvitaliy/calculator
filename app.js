var result = document.querySelector('#result');
var numberButtons = document.querySelectorAll('.number');
var clearBtn = document.querySelector("#clear");
var operationButtons = document.querySelectorAll('.operation');
var equally = document.querySelector('#equally');
var numberOne = '';
var operation = '';
var numberTwo = '';

clearBtn.addEventListener('click', function () {
    result.innerHTML = '';
});

function numberButtonClickListener(e) {
    // debugger;
    if (operation === '') {
        numberOne += e.currentTarget.value;
        result.innerHTML = numberOne;
    } else {
        result.innerHTML = '';
        numberTwo += e.currentTarget.value;
        result.innerHTML = numberTwo;
    }
}

function operationButtonClickListener(e) {

    operation = e.currentTarget.value;
    //result.innerHTML = '';

    console.log(numberOne)
}

function resultButtonClickListener(sign) {
    var res = 0;
    // debugger;
    if (sign === '+') {
        res = Number(numberOne) + Number(numberTwo);
    } else if (sign === '-') {
        res = Number(numberOne) - Number(numberTwo);
    } else if (sign === '*') {
        res = Number(numberOne) * Number(numberTwo);
    } else if (sign === '/') {
        res  = Number(numberOne) / Number(numberTwo);
    }
    result.innerHTML = res;
}

function commonOperation() {
    resultButtonClickListener(operation);
}

for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i]. addEventListener("click", numberButtonClickListener);  // клик по числовым кнопкам
}

for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", operationButtonClickListener);  // клик по числовым кнопкам
}
equally.addEventListener('click', commonOperation);
