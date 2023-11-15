// Packages required
const Shape = require('./constructor-shape');
const Circle = require('./circle-shape');
const Triangle = require('./triangle-shape');
const Square = require('./square-shape');

// npm test to see if it comes back as pass
describe('Shape', () => {
    it('should set color of shape to orange', () => {
      const shape = new Shape();
      shape.setColor("orange");
      expect(shape.color).toEqual('orange');
    });
  });

//test for circle shape
describe('Circle', () => {
    it('should render blue circle', () => {
    const shape = new Circle();
    shape.setColor("blue");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for triangle shape
describe('Triangle', () => {
    it('should render red triangle', () => {
    const shape = new Triangle();
    shape.setColor("red");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red"/><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for square shape
describe('Square', () => {
    it('should render purple square', () => {
    const shape = new Square();
    shape.setColor("purple");
    shape.setText("SVG");
    shape.setTextColor("white");
    const expected = `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="200" height="200" fill="purple"/><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="50px" font-weight="bold" fill="white">SVG</text>`
    expect(shape.render()).toEqual(expected);
    });
});
