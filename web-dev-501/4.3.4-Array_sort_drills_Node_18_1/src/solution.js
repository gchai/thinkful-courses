function sortWords(words) {
    return words.sort((a, b) => {
        return a > b ? 1 : -1;
    });
}

function sortNumbers(numbers) {
    return numbers.sort((a, b) => {
        return a - b;
    });
}

function largestFirst(numbers) {
    return numbers.sort((a, b) => {
        return b - a;
    });
}

function sortFlowersByZone(flowers) {
    return flowers.sort((flowerA, flowerB) => {
        return flowerA.zone > flowerB.zone ? 1 : -1;
    });
}

function sortByLength(strings) {
    return strings.sort((stringA, stringB) => {
        return stringA.length > stringB.length ? 1 : -1;
    });
}

module.exports = {
    sortWords,
    sortNumbers,
    largestFirst,
    sortFlowersByZone,
    sortByLength,
};