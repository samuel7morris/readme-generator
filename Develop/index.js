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
        {
            type: "list",
            name: "licensing",
            message: "give testing instructions:",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
        },

        {
            type: "input",
            name: "github",
            message: "Enter github username",
        },
        {
            type: "input",
            name: "githubLINK",
            message: "Enter github profile link",
        },
        {
            type: "input",
            name: "email",
            message: "enter your email here",
        },

    ])
}

function retrieveShield (answers) {
return `![npm](https://img.shields.io/static/v1?label=npm&message=${answers}&color=blue)
`
}

function generateReadMe (answers) {
return `
Title: ${answers.title} ${retrieveShield(answers.licensing)}
Table of Contents:
1. [Description](#Description)
2. [Instructions](#Instructions)
3. [Usage](#Usage)
4. [Contribution](#Contribution)
5. [Testing](#Testing)
-------------------------------------------------------------------------------------
Description: ${answers.description} \n
Instructions: ${answers.instructions} \n
Usage: ${answers.usage} \n
Contribution: ${answers.contribution} \n
Testing: ${answers.testing} \n
-- Questions -- \n
GitHub: ${answers.github} \n
Email: ${answers.email} \n
`
}


promptUser()
  .then(function(answers) {
    const README = generateReadMe(answers);

    return writeFileAsync("yourREADME.md", README);
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
