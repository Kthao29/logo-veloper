const Shape = require('./shapes');
const Circle = require('./circle');
const Triangle = require('./triangle');
const Square = require('./square');

// test for shape
describe('Shape', () => {
    it('should set color of shape', () => {
      const shape = new Shape();
      shape.setColor("yellow");
      expect(shape.color).toEqual('yellow');
    });
  });

//test for circle shape
describe('Circle', () => {
    it('should render red circle', () => {
    const shape = new Circle();
    shape.setColor("red");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for triangle shape
describe('Triangle', () => {
    it('should render blue triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for square shape
describe('Square', () => {
    it('should render green square', () => {
    const shape = new Square();
    shape.setColor("green");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="green"/><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});
