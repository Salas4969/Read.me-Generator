// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const markdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
//installation instructions, usage information, contribution guidelines, and test instructions
const questions = [
  {
    type: "input",
    message: "Enter a title",
    name: "Title",
  },
  {
    type: "input",
    message: "Enter a descripton",
    name: "Description",
  },
  {
    type: "list",
    message: "Choose a License",
    name: "License",
    choices: ["MIT", "Mozilla-Public", "Eclipse Public", "Apache"],
  },
  {
    type: "input",
    message: "Enter usage information",
    name: "Usage",
  },
  {
    type: "input",
    message: " Enter contribution guidelines",
    name: "Contribution",
  },
  {
    type: "input",
    message: " Enter test instructions",
    name: "Test",
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
    let desc;
    
  console.log(answers);

  desc = "#Title\n" + answers.Title;

  fs.writeFile(answers.Title + ".md", desc, myErrorFunc);

  desc = "\n#Description\n" + answers.Description;

  fs.appendFile(answers.Title + ".md", desc, myErrorFunc);

  const contentTable =
    " #Table of Content\n * [Installation](#installation)\n * [Usage](#usage)\n * [Credits](#credits)\n * [License](#license)";

  fs.appendFile(answers.Title + ".md", contentTable, myErrorFunc);

  const usageInfo = "#Usage Information\n" + answers.Usage;

  fs.appendFile(answers.Title + ".md", usageInfo, myErrorFunc);

  const contributionGuide = "\n#Contribution Guidelines\n" + answers.Contribution

fs.appendFile(answers.Title + ".md", contributionGuide, myErrorFunc);

  const testInfo = "\n#Test Information\n" + answers.Test;

  fs.appendFile(answers.Title + ".md", testInfo, myErrorFunc);

}

// TODO: Create a function to initialize app
function init() {
//   inq.prompt(questions).then((answers) => writeToFile(markdown(answers)))
//   inq.prompt(questions).then((answers) => markdown(answers))
  inq.prompt(questions).then((answers) => writeToFile(answers))
}
// Function call to initialize app
init();
