class Shape {
    constructor() {
        this.color = '';
    }
setColor(color) {
    this.color = color;
} 
}

//class circle
class Circle extends Shape {
    render(){
        return `<circle width="300" height="200" cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

//class triangle 
class Triangle extends Shape {
    render(){
        return `<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

//class square
class Square extends Shape {
    render(){
        return `<rect width="300" height="200" fill="${this.color}"/>`
    }
}

module.exports = {Shape, Circle, Triangle, Square};