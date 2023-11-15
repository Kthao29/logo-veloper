const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes.js');
console.log('Answer all the questions to create a logo!');

//node index.js to create logo by prompting them with questions
const questions = [
    {
      type: 'input',
      message: 'Enter a three character for a logo name.',
      name: "text",
      validate: input => input.length < 4,
    },
    {
      type: 'input',
      message: 'What do you want the text color to be?',
      name: 'textcolor',
    },
    {
      type: 'list',
      message: 'What shape do you want your logo to be?',
      name: "shape",
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      message: 'What do you want the color of the shape to be?',
      name: 'color',
    }, 
  ];

//function to render shape


//function to write to svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (input = "") {
            return console.log(err);
        } else {
        console.log('Generated logo.svg');
        }
    })
}
  
//function to initialize app
function init() {
    inquirer.prompt(questions)
   .then(function (data) {
    var fileName = './generated-readme/README.md';
    writeToFile(fileName, data);
   });
}

init();