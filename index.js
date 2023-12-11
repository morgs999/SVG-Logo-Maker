// Required Libraries
const fs = require('fs');
const inquirer = require('inquirer');
const { renderShape } = require('./lib/shapes.js');

// List of User Inputs
const questions = [
    {
        type: 'input',
        message: 'Enter 3 characters - ',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Enter text color - ',
        name: 'textcolor'
    },
    {
        type: 'list',
        message: 'Choose Square, Circle, or Triangle - ',
        name: 'shape',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        message: 'Enter shape color - ',
        name: 'shapecolor'
    }
]

// Function to create Logo from Users Input and Shape Class
inquirer.prompt(questions).then(answers => {
    const logo = renderShape(answers);
    fs.writeFile('./example_logo/logo.svg', logo, function (err) {
        if (err) {
            console.log("Error caught", err);
        }
    })
    console.log("Logo has been generated!");
})