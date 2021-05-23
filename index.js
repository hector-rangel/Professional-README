// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    // project title
    {
        type: 'input',
        name: 'Project Title',
        message: 'Title of my project:'
    },
    // description 
    {
        type: 'input',
        name: 'Description',
        message: 'Provide a description of the project:'
    },
    // installation instruction
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project:'
    },
    // Usage info
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use:'
    },
    // license info
    {
        type: 'input',
        name: 'License',
        message: 'Let other developers know what they can and cannot do with your project:'
    },
    // contributing process
    {
        type: 'input',
        name: 'Contributing',
        message: 'Contribute here!'
    },
    // test instructions
    {
        type: 'input',
        name: 'Tests',
        message: 'Test for your application:'
    },
    // github username 
    {
        type:'input',
        name: 'Questions',
        message: 'Enter link to GitHub profile for questions:'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('You created a readme');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("README.MD", generateMarkdown(userInput));
    })
};

// Function call to initialize app
init();
