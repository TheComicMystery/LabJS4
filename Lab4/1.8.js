function getLongestOfThreeWords(word1, word2, word3) {
    let maxLength = Math.max(word1.length, word2.length, word3.length);
    if (word1.length === maxLength) return word1;
    if (word2.length === maxLength) return word2;
    return word3;
}

var output = getLongestOfThreeWords("these", "three", "words");
console.log(output);
