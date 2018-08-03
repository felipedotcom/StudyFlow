```js
(function(doc, win){
    'use strict';

    var $visor = document.querySelector('[data-js="visor"]');
    var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = document.querySelector('[data-js="button-ce"]');
    var $buttonEqual = document.querySelector('[data-js="button-equal"]');

    Array.prototype.forEach.call($buttonsNumbers, function(button) {
    button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
    button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);

    function handleClickNumber() {
    $visor.value += this.value;
    }

    function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
    }

    function handleClickCE() {
    $visor.value = 0;
    }

    function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
        return operator === lastItem;
    });
    }

    function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
        return number.slice(0, -1);
    }
    return number;
    }

    function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function(accumulated, actual) {
        var firstValue = accumulated.slice(0, -1);
        var operator = accumulated.split('').pop();
        var lastValue = removeLastItemIfItIsAnOperator(actual);
        var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
        switch(operator) {
        case '+':
            return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
        case '-':
            return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
        case 'x':
            return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
        case '÷':
            return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
        }
    });
    }

})(document, window);
```