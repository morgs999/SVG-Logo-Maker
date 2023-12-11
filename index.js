const fs = require('fs');
const inquirer = require('inquirer');

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

