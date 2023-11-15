//package required
const Shape = require('./constructor-shape');

//class for square
class Square extends Shape {
    constructor(text, textcolor, color) {
        super (text, textcolor, color); 
    };
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="${this.color}"/><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="${this.textcolor}">${this.text}</text>`
    }
}

// export square
module.exports = Square;