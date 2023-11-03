class Text {
    constructor() {
        this.text = ''
        this.textColor = ''
    }
    setText(text) {

        this.text = text;
    }
    setTextColor(textColor){

        this.textColor = textColor;
    }
    render() {
        return `<text x="75" y="125" font-family="Sans-serif" font-size="75" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Text;