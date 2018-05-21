const funcs = require('./project-1');

// write your tests here
describe('project one test cases', () => {
  it ('should multyiple a number by ten', () => {
    const multiplyByTen = funcs.multiplyByTen;
    expect(multiplyByTen(10)).toBe(100);
  })
  it ('should subract by five.', () => {
    const subtractFive = funcs.subtractFive;
    expect(subtractFive(10)).toBe(5);
  })
  it ('should check if two strings are the same length', () => {
    const areSameLength = funcs.areSameLength;
    expect(areSameLength('hello world', 'hello world')).toBeTruthy();
  })
  it ('two variables should equal', () => {
    const areEqual = funcs.areEqual;
    expect(areEqual(1,1)).toBeTruthy();
  })
  describe('less than ninety test cases', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it ('variable should be less than ninty', () => {
      expect(lessThanNinety(50)).toBeTruthy();
    })
    it ('variable should be greater than ninety', () => {
      expect(lessThanNinety(100)).toBeFalsy();
    })
  })
  it ('var should be greater than fifty', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    expect(greaterThanFifty(51)).toBeTruthy();
  })
  it ('should add two numbers and return the sum', () => {
    const add = funcs.add;
    expect(add(1, 2)).toEqual(3);
  })
  it ('should subtract', () => {
    const sub = funcs.subtract;
    expect(sub(50, 5)).toEqual(45);
  })
  it ('should divide', () => {
    const div = funcs.divide;
    expect(div(2, 4)).toEqual(0.5);
  })
  it ('should multiply', () => {
    const mul = funcs.multiply;
    expect(mul(5,5)).toEqual(25)
  })
  it ('should get the remainder of a divisor', () => {
    const remainder = funcs.getRemainder;
    expect(remainder(5, 2)).toEqual(1);
  })
  it ('should return true if even', () => {
    const isEven = funcs.isEven;
    expect(isEven(4)).toBeTruthy();
  })
  it ('should return true if odd', () => {
    const isOdd = funcs.isOdd;
    expect(isOdd(5)).toBeTruthy();
  })
  it ('should return the square of a number', () => {
    const square = funcs.square;
    expect(square(2)).toEqual(4);
  })
  it ('should return the cube of a number', () => {
    const cube = funcs.cube;
    expect(cube(3)).toEqual(27);
  })
  it ('should return the product of a variable raised to the power of a variable', () => {
    const pow = funcs.raiseToPower;
    expect(pow(3, 3)).toEqual(27);
  })
  it ('should round a number', () => {
    const round = funcs.roundNumber;
    expect(round(55.56)).toEqual(56);
  })
  it ('should round a number up', () => {
    const roundUp = funcs.roundUp;
    expect(roundUp(59.19)).toEqual(60);
  })
  it ('should add exclamation point to the end of a string', () => {
    const exclamation = funcs.addExclamationPoint;
    str = 'hello world'
    expect(exclamation(str)).toMatch(str + '!');
  })
  it ('should combine two names', () => {
    const combineNames = funcs.combineNames;
    const first = 'eric';
    const last = 'gomez';
    expect(combineNames(first, last)).toMatch(`${first} ${last}`);
  })
  it ('should take a name and return a greeting with the name', () => {
    const getGreeting = funcs.getGreeting;
    expect(getGreeting('eric')).toMatch(`Hello eric`);
  })
  it ('should return the area of a rectangle', () => {
    const getRecArea = funcs.getRectangleArea;
    expect(getRecArea(20, 20)).toEqual(400);
  })
  it ('should return the area of a triangle', () => {
    const triArea = funcs.getTriangleArea;
    expect(triArea(5, 5)).toEqual(12.5);
  })
  it ('should return the area of a circle', () => {
    const areaCirc = funcs.getCircleArea;
    expect(parseFloat(areaCirc(2).toFixed(2))).toEqual(12.57)
  })
  it ('should return the volume of a rectangular prism', () => {
    const prism = funcs.getRectangularPrismVolume;
    expect(prism(2, 3, 2)).toEqual(12);
  })
})
