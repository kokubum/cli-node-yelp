#!/usr/bin/env node
const { program } = require("commander");
const pkg = require("../package.json");

// Main package of the appplication
program
  .version(pkg.version)
  .command(
    "api_key",
    "Manage the API Key from the Yelp API: https://www.yelp.com/fusion"
  )
  .command("search", "Search for Restaurants/Reviews in the Yelp")
  .parse(process.argv);
