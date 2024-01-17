function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

let numToCheck = 3; 
if (isPrime(numToCheck)) {
    console.log(numToCheck + ' là số nguyên tố.');
} else {
    console.log(numToCheck + ' không phải là số nguyên tố.');
}