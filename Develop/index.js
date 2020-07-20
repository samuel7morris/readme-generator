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
return `![github license] (src: https://img.shields.io/badge/license-${answers}-blue.svg)

`
}

function generateReadMe (answers) {
return `${retrieveShield(answers.licensing)}
Title: ${answers.title}
Table of Contents:
1. [Description](#Description)
2. [Instructions](#Instructions)
3. [Usage](#Usage)
4. [Contribution](#Contribution)
5. [Testing](#Testing)
-------------------------------------------------------------------------------------
Description: ${answers.description}
Instructions: ${answers.instructions}
Usage: ${answers.usage}
Contribution: ${answers.contribution}
Testing: ${answers.testing}
-- Questions --
GitHub: ${answers.github}
Email: ${answers.email}
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
