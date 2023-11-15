const Shape = require('./constructor-shape');

//class for circle
class Circle extends Shape {
    constructor(text, textcolor, color) {
        super (text, textcolor, color); 
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="${this.textcolor}">${this.text}</text>`
    }
}

//export circle
module.exports = Circle;