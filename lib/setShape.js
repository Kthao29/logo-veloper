const Circle = require('./circle-shape');
const Triangle = require('./triangle-shape');
const Square = require('./square-shape');

// function for shape when input = to corresponding string
function setShape(input) {
    if (input.shape === 'Circle') {
        let inputShape = new Circle (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.shape === 'Triangle') {
        let inputShape = new Triangle (input.text, input.textcolor, input.color)
        return inputShape.render()
    } else if (input.shape === 'Square') {
        let inputShape = new Square (input.text, input.textcolor, input.color)
        return inputShape.render()
    }
};

//export setShape
module.exports = setShape;