const Shape = require('./shapes');

//class triangle 
class Triangle extends Shape {
    constructor(text, textcolor, color) {
        super (text, textcolor, color); 
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="${this.textcolor}">${this.text}</text>`
    }
}

// export triangle
module.exports = Triangle;
