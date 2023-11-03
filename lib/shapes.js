 class Shapes {
    constructor(){

        this.shapeColor = ''
    }
    setColor(shapeColor) {
        this.color = shapeColor; 
    } 
 }

 class Circle extends Shapes {
    render(){
        return `<circle cx="155" cy="100" r="90" fill="${this.color}" />`
    }
 }
 class Triangle extends Shapes {
    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`
    }
 }
 class Square extends Shapes {
    render(){
        return `<rect x="65" y="10" width="175" height="175" fill="${this.color}" />`
    }
 }

 module.exports = {
    Shapes,
    Circle,
    Triangle,
    Square,
 }