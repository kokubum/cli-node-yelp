const axios = require("axios");

// A manager to the Yelp API, that will made the request to fetch the data
class YelpAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.url = "https://api.yelp.com/v3/businesses/search";
  }

  // The method that will made a get request and apply all the parameters
  async getFoodPlace(
    location,
    { count, sort, radiusLimit, open, price, page }
  ) {
    // Defining the url, and the authorization header with the api key
    const yelpResponse = await axios.get(
      `${
        this.url
      }?location=${location}&limit=${count}&radius=${radiusLimit}&open_now=${open}&sort_by=${sort}&price=${price}&offset=${
        page - 1
      }`,
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
      }
    );

    return yelpResponse.data.businesses;
  }
}

module.exports = YelpAPI;
