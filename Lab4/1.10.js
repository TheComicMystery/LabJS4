function computeSumBetween(num1, num2) {
    if (num1 >= num2) return 0;
    let sum = 0;
    for (let i = num1 + 1; i < num2; i++) {
        sum += i;
    }
    return sum;
}

var output = computeSumBetween(2, 5);
console.log(output);