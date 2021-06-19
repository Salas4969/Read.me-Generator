
// TODO: Include packages needed for this application
const inq= require(inquirer)
const fs=require(fs)
// TODO: Create an array of questions for user input
//Installation, Usage, License, Contributing, Tests, and Questions
const questions = [{ 
    type: "input",
    message: "enter title",
    answer: "",
},
{
    type:"input",
    message:"enter a descripton",
    answer:""
},
{
    type: "input",
    message: "Wha is this intended for?",
    answer: "",
},{
    type: "input",
    message: "Who is contributing?",
    answer: "",
},



];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
//foreach loop through questions


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
