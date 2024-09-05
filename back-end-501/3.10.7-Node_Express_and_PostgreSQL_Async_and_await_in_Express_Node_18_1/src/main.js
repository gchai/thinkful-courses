const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

async function getSlogan(request) {
  try {
    const response = await generateSlogan(request);
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${response.slogan}`);
  } catch (error) {
    console.error(error);
  }
}

async function fullSession(request) {
  try {
    console.log(await generateMessage());
    await getSlogan(request);
    console.log("Best of luck on your startup...");
    await goodbye();
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getSlogan, fullSession };
