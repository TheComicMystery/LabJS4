function filterOddElements(arr) {
    return arr.filter(num => num % 2 !== 0);
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output);