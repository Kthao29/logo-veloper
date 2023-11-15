const {Shape, Circle, Triangle, Square} = require('./shapes');

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
    const expected = `<circle width="300" height="200" cx="150" cy="100" r="80" fill="red"/>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for triangle shape
describe('Triangle', () => {
    it('should render blue triangle', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    const expected = `<polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="blue"/>`
    expect(shape.render()).toEqual(expected);
    });
});

//test for square shape
describe('Square', () => {
    it('should render green square', () => {
    const shape = new Square();
    shape.setColor("green");
    const expected = `<rect width="300" height="200" fill="green"/>`
    expect(shape.render()).toEqual(expected);
    });
});
