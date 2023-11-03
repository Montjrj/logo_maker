const inquirer =require("inquirer"); 
const fs = require("fs"); 
const path = require("path"); 

const questions = [

    {
        type: "input", 
        message: "Enter up to 3 characters",
        name: "text",
        validate: (input) => {
            return input.trim() === ''
            ? "Please enter up to 3 Characters" 
            : input.length > 3 
            ? "Error please enter up to 3 characters. Thanks :)"
            : true
        },
    }, 

    {
        type:"input",
        message: "Enter a text color or hexadecimal number ",
        name: "textColor",
        validate: (input) => {
            return input.trim() === ''
            ? "Please enter a color buddy!"
            : true
        },
    },
    {
        type: "list",
        message: " Please select a shape: ",
        choices: ["Circle", "Triangle", "Square"],
        name: "shapeClass", 
        validate: (input) => {
            return input ? true : "Error, You need to select a shape! "
        },
    },
    {
        type:"input",
        message: "Enter a shape color or hexadecimal number ",
        name: "shapeColor",
        validate: (input) => {
            return input.trim() === ''
            ? "Please enter a shape color buddy!"
            : true
        },
    },

];

// write to file function 

function init() {
    inquirer
        .prompt(questions).then((data) => {
            const { text, textColor, shapeClass, shapeColor } = data 
        })
}

init(); 