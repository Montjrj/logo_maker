const inquirer =require("inquirer"); 
const fs = require("fs"); 
const path = require("path"); 
const { Circle, Triangle, Square } = require("./lib/shapes")
const  Text = require("./lib/text")

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

            let svgShapeContent
            switch (shapeClass) {
                case "Circle": 
                    svgShapeContent = new Circle()
                    break;
                case "Triangle": 
                    svgShapeContent = new Triangle()
                    break; 
                case "Square": 
                    svgShapeContent = new Square()
                    break;
            }
            svgShapeContent.setColor(shapeColor)
            let svgTextContent = new Text()
            svgTextContent.setText(text);
            svgTextContent.setTextColor(textColor); 

            const svgStarterTag = '<svg width="300px" height="200px"  xmlns="http://www.w3.org/2000/svg">'
            const svgEndTag = '</svg>'

            const combinedSvgContent = `
            ${svgStarterTag}
            ${svgShapeContent}
            ${svgTextContent}
            ${svgEndTag}
            `
            const fileName = 'logo.svg'
            
            writeToFile(fileName, combinedSvgContent)
        })
        .catch((err) => {

            console.error(err)
        })
}

init(); 


/* <svg width="300px" height="200px"  xmlns="http://www.w3.org/2000/svg">
<circle cx="155" cy="100" r="90" fill="black" /> <text x="75" y="125" font-family="Sans-serif" font-size="75" fill="navy">RJM</text>
</svg> */