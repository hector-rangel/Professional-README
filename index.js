// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    // project title
    {
        type: 'input',
        name: 'title',
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
    // usage info
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions for use:'
    },
    // license info
    {
        type: 'checkbox',
        name: 'License',
        message: 'Which license would you like to add?',
        choices: ['MIT', 'AGPLv3.0','APACHEv2.0', 'BSLv1.0', 'CC0v1.0', '2PLv2.0', 'GPLv2.0', 'GPLv3.0', 'LGPLv2.1', 'MPLv2.0']
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
        name: 'GitHub',
        message: 'Enter link to GitHub profile for questions:'
    },
    // E-mail
    {
        type: 'input',
        name: 'Email',
        message: 'Enter email'
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
        writeToFile("Created README.MD", generateMarkdown(userInput));
    })
};

// Function call to initialize app
init();
