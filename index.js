// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
// const markdown = require('./generateMarkdown.js');
const generateMarkdown = require("./generateMarkdown.js");
// TODO: Create an array of questions for user input
//installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
  {
    type: "input",
    message: "Enter a title",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a descripton",
    name: "description",
  },
  {
    type: "list",
    message: "Choose a License",
    name: "license",
    choices: ["MIT", "Mozilla-Public", "Eclipse Public", "Apache","none"],
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "usage",
  },
  {
    type: "input",
    message: " Enter contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: " Enter test instructions",
    name: "test",
  },
];
// TODO: Create a function to write README file
function myErrorFunc(error) {
  if (error) {
    return console.log(error);
  } else {
    console.log("Success");
  }
}
function writeToFile(answers) {
    
const readMeCont = generateMarkdown(answers)
fs.writeFile(answers.title + ".md", readMeCont, myErrorFunc);

}

// TODO: Create a function to initialize app
function init() {
  inq.prompt(questions).then((answers) => writeToFile(answers))
}
// Function call to initialize app
init();
