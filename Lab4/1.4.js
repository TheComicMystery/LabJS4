function joinArrayOfArrays(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}

var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
console.log(output);
