const { program } = require("commander");
const search = require("../commands/search");

// Sub-commands of the main command "yelp search"
program
  .command("food_places <location>")
  .description("Search for the food_places registered in Yelp API")
  .option(
    "-c, --count <number_of_results>",
    "Number of results that you wanna receive",
    20
  )
  .option(
    "-s, --sort <type>",
    "Sort the results -> Possible choices ['best_match', 'rating', 'review_count', 'distance']",
    "best_match"
  )
  .option(
    "-pr, --price <number>",
    "Filter the results based on the price",
    "1,2,3,4"
  )
  .option(
    "-rl, --radius-limit <radius>",
    "Radius limit, in meters, that you wanna search -> Max Value (40 000 meters)",
    40000
  )
  .option(
    "-pg, --page <page>",
    "Page number of the results, starting on 0",
    "0"
  )
  .option("-o, --open", "Search for only the open restaurants", false)
  .action(search.findFoodPlaces);

program.parse(process.argv);
