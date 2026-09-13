function divideNumbers(a, b) {
    return a / b;
}

function getAverage(numbersList) {
    let total = 0;
    for (let i = 0; i <= numbersList.length; i++) {
        total += numbersList[i];
    }
    return divideNumbers(total, numbersList.length);
}

console.log(getAverage([10, 20, 30]));