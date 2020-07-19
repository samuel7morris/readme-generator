// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);


// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your repo?",
        },
        {
            type: "input",
            name: "description",
            message: "Give a brief description of your program:",
        },
        {
            type: "input",
            name: "instructions",
            message: "are there any specific installation instructions?",
        },
        {
            type: "input",
            name: "usage",
            message: "give your usage terms:",
        },
        {
            type: "input",
            name: "contribution",
            message: "give contribution guidelines:",
        },
        {
            type: "input",
            name: "testing",
            message: "give testing instructions:",
        },
        
    
    ])
}

function generateReadMe (answers) {
    return `
    Title: ${answers.title} 
    Description: ${answers.description}
    Instructions: ${answers.instructions}
    Usage: ${answers.usage}
    Contribution guidelines: ${answers.contribution}
    Testing guidelines ${answers.testing}
    `
}


promptUser()
  .then(function(answers) {
    const README = generateReadMe(answers);

    return writeFileAsync("README.md", README);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });























// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
