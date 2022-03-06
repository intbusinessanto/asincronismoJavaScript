function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 7, suma));

console.log(calc(2, 7, resta));

console.log(calc(2, 7, multiplicacion));

console.log(calc(2, 7, division));

function date(callback) {
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 5000)
}


function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);