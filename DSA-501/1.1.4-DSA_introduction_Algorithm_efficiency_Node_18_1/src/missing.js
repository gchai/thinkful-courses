
/**
 The missing number problem
 Implement algorithm 1 here
*/

function missing1(array) {
    let n = array.length + 1;
    for (let i = 1; i <= n; i++) {
        let found = false;
        let j = 0;
        while(j < array.length && !found) {
            if (array[j] === i) {
                found = true;
            }
            j++;
        }
        if (!found) return i;
    }
}


/**
The missing number problem
Implement algorithm 2 here
*/

function missing2(array) {
    let n = array.length + 1;
    let fullSum = n * (n + 1) / 2;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return fullSum - sum;
}

module.exports = { missing1, missing2 };