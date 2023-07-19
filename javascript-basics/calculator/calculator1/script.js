let result = document.getElementById('output');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function calculateResult() {
    let expression = result.value;
    let match = expression.match(/([+\-*/])/);
    let operator = match[1];
    let parts = expression.split(operator);
    let leftNumber = parts[0].trim();
    let rightNumber = parts[1].trim();
    // console.log(leftNumber,rightNumber);
    let resultValue;
    switch (operator) {
        case '+':
            resultValue = +leftNumber + +rightNumber;
            break;
        case '-':
            resultValue = +leftNumber - +rightNumber;
            break;
        case '*':
            resultValue = +leftNumber * +rightNumber;
            break;
        case '/':
            resultValue = +leftNumber / +rightNumber;
            break;
        default:
            resultValue = 'Error';
    }

    result.value = resultValue;
}


function deleteNumber() {
    result.value = result.value.slice(0, -1);
}

function clearResult(){
    result.value = '';
}