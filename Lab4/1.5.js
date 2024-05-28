function findSmallestNumberAmongMixedElements(arr) {
    const nums = arr.filter(item => typeof item === 'number');
    return nums.length === 0 ? 0 : Math.min(...nums);
}

var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
console.log(output);
