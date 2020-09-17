// A util function that format the output
const printPlaces = (data, { page }) => {
  // Fields that we will use to print in the console
  const requiredFields = [
    "id",
    "name",
    "rating",
    "location",
    "phone",
    "review_count",
    "price",
  ];

  console.log("\nPAGE: ".bold + `${page}`.red.bold);
  console.log(
    "------------------------------".bold +
      "FOOD PLACES".green.bold +
      "-----------------------------".bold
  );

  // Iterate through the places of the output
  data.forEach((place) => {
    // Iterate through the fields of each place
    Object.keys(place).forEach((field) => {
      // Test if the field that we are iterating are one of the required fields
      if (requiredFields.includes(field)) {
        // if the field is the location field we wanna handle in a specific way
        if (field === "location") {
          defineLocation(place[field]);
        } else {
          console.log(
            `-> ${field.toUpperCase()}: `.green.bold + `${place[field]}`.bold
          );
        }
      }
    });
    console.log(
      "---------------------------------------------------------------------"
        .bold
    );
  });
};

// The location field is an object, so we iterate through the keys, and only output the "adress" fields
const defineLocation = (location) => {
  Object.keys(location).forEach((field) => {
    if (field.match(/^address/) && location[field]) {
      console.log(
        `-> ${field.toUpperCase()}: `.green.bold + `${location[field]}`.bold
      );
    }
  });
};

module.exports = printPlaces;
