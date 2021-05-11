// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const licenseArray = ["a", "b", "c"];
// TODO: Create an array of questions for user input
const questions = inquirer
  .prompt([
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
  ])
  .then((response) => {
    console.log(response);
    // console.log(response.title);
  });

// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
