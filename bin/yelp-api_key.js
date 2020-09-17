const { program } = require("commander");
const apiKey = require("../commands/apiKey");

// Sub-commands of the main command "yelp api_key"
program.command("set").description("Set the API Key").action(apiKey.set);

program.command("get").description("Get the API Key").action(apiKey.get);

program
  .command("remove")
  .description("Remove the current API Key")
  .action(apiKey.remove);

program.parse(process.argv);
