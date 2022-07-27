var number = prompt("Reqemi daxil ele");

let result = SumOfDigits(number);
alert(result);

function SumOfDigits(num) {
    let numStr = String(number);
    let result = 0;
    for (let i = 0; i < numStr.length; i++) {
        result += parseInt(numStr[i]);
    }
    return result;
}
