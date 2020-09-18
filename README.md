# CLI Yelp Application 

A command line interface made with the purpose of fetching and formatting the data from de Yelp API. <br>(https://www.yelp.com/developers) 

## Getting Started

Clone this repository:
```
https://github.com/kokubum/cli-node-yelp.git
```
Inside of the bin directory, link the yelp.js file to call the application with the "yelp" command:
```
npm link
```
## Commands

- Management of the API Key
```sh
$ yelp api_key --help
  Usage: yelp-api_key [options] [command]

  Commands:
    set             Set the API Key
    get             Get the API Key
    remove          Remove the current API Key
```
<img src="https://user-images.githubusercontent.com/47634578/93597278-2b490000-f991-11ea-9a14-ea31cd744332.gif" width="500" height="150"/>
<br>

- Filter and search for establishments available in Yelp
```
$ yelp api_key food_places --help
  Usage: yelp-search food_places [options] <location>

  Options:
    -c, --count <number_of_results>  Number of results that you wanna receive
                                     (default: 20)
    -s, --sort <type>                Sort the results -> Possible choices
                                     ['best_match', 'rating', 'review_count',
                                     'distance'] (default: "best_match")
    -pr, --price <number>            Filter the results based on the price
                                     (default: "1,2,3,4")
    -rl, --radius-limit <radius>     Radius limit, in meters, that you wanna
                                     search -> Max Value (40 000 meters)
                                     (default: 40000)
    -pg, --page <page>               Page number of the results
                                     (default: 0)
    -o, --open                       Search for only the open restaurants
                                     (default: false)
```
<img src="https://user-images.githubusercontent.com/47634578/93597831-11f48380-f992-11ea-9bdc-d541aa032b0a.gif" width="500" height="300"/>

