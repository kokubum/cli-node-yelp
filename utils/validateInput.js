// Validating the input from the inquirer prompt, if the input is empty a string will be returned, otherwise the funciton return false
const validateInput = (input) =>
  input === "" ? "An API key is required".red.bold : true;

module.exports = validateInput;
