const ApiKeyManager = require("../lib/ApiKeyManager");
const inquirer = require("inquirer");
const colors = require("colors");
const validateInput = require("../utils/validateInput");

// Controller for the sub-command action of the main command "yelp api_key"
const apiKey = {
  // Action to the sub-command "yelp api_key set"
  async set() {
    const apiKeyManager = new ApiKeyManager();

    // Creating an inquirer prompt that will log one question and receives my input answer
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "apiKey",
        message: "What's your API Key:".green,
        validate: validateInput,
      },
    ]);
    // Setting the api key inside of the config store
    apiKeyManager.setKey(answer.apiKey);
    console.log("The API Key was defined".bold);
  },

  // Action to the sub-command "yelp api_key get"
  get() {
    const apiKeyManager = new ApiKeyManager();

    try {
      // Get and log the key in the console
      const apiKey = apiKeyManager.getKey();
      console.log("Current API Key: ".green.bold + apiKey.bold);
    } catch (err) {
      console.log("Error: ".bold.red + err.message.bold);
    }
  },
  // Action to the sub-command "yelp api_key remove"
  remove() {
    const apiKeyManager = new ApiKeyManager();

    try {
      // removing the key
      apiKeyManager.removeKey();
      console.log("API Key was removed".bold.green);
    } catch (err) {
      console.log("Error: ".bold.red + err.message.bold);
    }
  },
};

module.exports = apiKey;
