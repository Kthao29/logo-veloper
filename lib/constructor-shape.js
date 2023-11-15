class Shape {
    constructor(text, textcolor, color) {
        this.text = text;
        this.textcolor = textcolor;
        this.color = color;
    }
setText(text) {
    this.text = text;
} 
setTextColor(textcolor) {
    this.textcolor = textcolor;
} 
setColor(color) {
    this.color = color;
} 
}

//export shape
module.exports = Shape;