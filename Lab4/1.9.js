function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        result += Math.abs(a);
    }
    if (a < 0 && b < 0 || a > 0 && b > 0) {
        return result;
    } else {
        return -result;
    }
}

var output = multiply(4, 7);
console.log(output);
