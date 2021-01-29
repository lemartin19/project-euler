const arrMultiplication = (arr, multiplier) => {
    const multiplied = arr.map(val => val * multiplier);

    let carry = 0;
    for (let idx = 0; idx < arr.length; idx++) {
        multiplied[idx] += carry;
        carry = Math.floor(multiplied[idx] / 10);
        multiplied[idx] = multiplied[idx] % 10;
    }
    while (carry > 0) {
        multiplied.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return multiplied;
};

const arrPower = (arr, num, power) => {
    if (power === 0) return arr;

    const multiplyOnce = arrMultiplication(arr, num);
    return arrPower(multiplyOnce, num, power - 1);
}

const arr = arrPower([1], 2, 1000);
const result = arr.reduce((sum, val) => sum + val);
console.log(`solution: ${result}`);