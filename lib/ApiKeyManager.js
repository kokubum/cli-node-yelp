const ConfigStore = require("configstore");
const pkg = require("../package.json");

// An Key manager to handle and store the API key inside of the config store
class ApiKeyManager {
  constructor() {
    this.config = new ConfigStore(pkg.name);
  }

  setKey(key) {
    this.config.set("apiKey", key);
  }

  getKey() {
    const key = this.config.get("apiKey");
    if (!key)
      throw new Error(
        "No API Key was registered - Set a new Key with 'yelp apiKey set' or Get a key in : https://www.yelp.com/fusion"
      );
    return key;
  }

  removeKey() {
    const key = this.config.get("apiKey");
    if (!key) throw new Error("You don't have a registered API Key");

    this.config.delete("apiKey");
  }
}

module.exports = ApiKeyManager;
