const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown.js');
const questions = [
    'What is the title of your project?',
    'Write a description about your project.',
    'Create some instructions for downloading your project.',
    'What is the intended use of your project?',
    'What License will you be using for your project?(Note: Naming must be exact, except for casing)',
    'How can someone contribute to your project',
    'How can someone else test your project',
    'How can someone contact you with questions about your project'
];

function writeToFile(fileName, data) {
    let file = markdown(data); // Get string containing formatted file
    fs.writeFile(fileName, file, err =>{
        if(err){console.log(err);}
    });
}

function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the desired name of your README file.',
            name: "fileName"
        },
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: "description"
        },
        {
            type: 'input',
            message: questions[2],
            name: "installation"
        },
        {
            type: 'input',
            message: questions[3],
            name: "usage"
        },
        {
            type: 'input', 
            message: questions[4],
            name: "license"
        },
        {
            type: 'input',
            message: questions[5],
            name: "contribution"
        },
        {
            type: 'input',
            message: questions[6],
            name: "test"
        },
        {
            type: 'input',
            message: questions[7],
            name: "contact"
        }
    ])
    .then((response) => {
        writeToFile(response.fileName, response)
    })
}

init();
