const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function ask(question) {
    return tell(question).then((response) => [
        `Your question was: ${question}`,
        `Your fortune is: ${response}`,
    ]);
}

// Function: getFortune
// Parameters: question (string)
// Returns: Promise that resolves to a string or an error message
// TODO: Implement the getFortune function by utilizing the ask function to get the fortune for the question.
// Hint: Call the ask function with the question and extract the fortune from the response array.
function getFortune(question) {
    if (question) {
        return ask(question).then((response) => response)
    } else {
        return ask().catch((response) => `There was an error: ${response}`);
    }
}

// // Function: fullSession
// // Parameters: question (string)
// // Returns: Promise that resolves to an array of strings or an error message
// // TODO: Create a full session by combining the welcome, getFortune, and goodbye functions.
// // Hint: Use promise chaining to call the functions in the correct order and concatenate the results.
// function fullSession(question) {
//     // Call the welcome function.
//     // Chain the getFortune function to get the fortune for the question.
//     // Chain the goodbye function and concatenate the results with the session.
//     // Return a promise that resolves to the final session array or an error message.
//     let result = [];
//     return welcome()
//         .then((resolvedWelcome) => {
//             result.push(resolvedWelcome);
//             return getFortune(question);
//         })
//         .then((resolvedFortune) => {
//             result = result.concat(resolvedFortune);
//             return goodbye();
//         })
//         .then((resolvedGoodbye) => {
//           result.push(resolvedGoodbye);
//           return result;
//           console.log(result)
//         });
// }

async function fullSession(question) {
    let result = [];
    const welcomeMessage = await welcome();
    const fortuneMessage = await getFortune(question);
    const goodbyeMessage = await goodbye();
    result.push(welcomeMessage);
    result = result.concat(fortuneMessage);
    result.push(goodbyeMessage);
    return result
}

fullSession("Test").then((response) => console.log(response))

module.exports = { getFortune, fullSession };