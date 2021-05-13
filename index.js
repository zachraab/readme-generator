// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const path = require("path");

const generateMarkdown = require("./utils/generateMarkdown");

const licenseArray = [
  "MIT",
  "LGPL",
  "GPL",
  "ISC",
  "Copyleft",
  "Apache",
  "none",
];
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the name of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "What is the description of your project?",
  },
  {
    name: "installationInstructions",
    type: "input",
    message: "What are the installation instructions?",
  },
  {
    name: "usageInformation",
    type: "input",
    message: "What is the usage information?",
  },
  {
    name: "contributionGuidelines",
    type: "input",
    message: "What are the contribution guidelines?",
  },
  {
    name: "testInstructions",
    type: "input",
    message: "What are the test instructions?",
  },
  {
    name: "license",
    type: "list",
    message: "Please select a license for your application:",
    choices: licenseArray,
  },
  {
    name: "gitHubUserName",
    type: "input",
    message: "What is your GitHub username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your e-mail address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) =>
    error
      ? console.log(error)
      : console.log("You've successfully created a README.md file!")
  );
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    //    call function that writes readme
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
