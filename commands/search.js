const YelpAPI = require("../lib/YelpAPI");
const ApiKeyManager = require("../lib/ApiKeyManager");
const colors = require("colors");
const printPlaces = require("../utils/printPlaces");

// Controller for the sub-command action of the main command "yelp search"
const search = {
  // Action to the sub-command "yelp search food_places"
  async findFoodPlaces(location, cmdObject) {
    const apiKeyManager = new ApiKeyManager();
    try {
      // Updating the page options
      cmdObject.page =
        parseInt(cmdObject.page) === 0 ? 1 : parseInt(cmdObject.page);
      // Creating a manager of the Yelp API
      const yelpAPI = new YelpAPI(apiKeyManager.getKey());
      // Making a request for the Yelp API
      const data = await yelpAPI.getFoodPlace(location, cmdObject);

      // Util function to format and print the data that was received from the API
      printPlaces(data, cmdObject);
    } catch (err) {
      // A little change to handle some different type of errors
      const message =
        err.response === undefined
          ? err.message.bold
          : err.response.data.error.description.bold;

      console.log("Error: ".bold.red + message);
    }
  },
};

module.exports = search;
