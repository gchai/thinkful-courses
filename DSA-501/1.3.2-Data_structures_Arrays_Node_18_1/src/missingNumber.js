/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
    for (let i=1;i<=numbers.length+1;i++){
        if (!numbers.includes(i)){
            return i
        }
    }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {
    let n = numbers.length+1;
    let expected = n*(n+1)/2;
    let actual = numbers.reduce((acc,curr) => acc + curr);
    return expected-actual;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
