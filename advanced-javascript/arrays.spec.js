const arrayFunctions = require('./arrays');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe ('Arrays', () => {
  describe ('map', () => {
    const map = arrayFunctions.map;
    it('should be a function', () => {
      expect(typeof map).toBe('function');
    });
    it ('should return the correct input data', () => {
      const arr = [];
      const loop = map([1,2,3,4], (a) => {arr.push(a)});
      expect(arr).toEqual([1,2,3,4])
    });
  });
  describe ('reduce', () => {
    const reduce = arrayFunctions.reduce;
    it ('should be a function', () => {
      expect(typeof reduce).toBe('function');
    })
    it ('should reduce an array of numbers to a sum', () => {
      const total = reduce([1,2,3,4], (a, b) => { return a += b});
      expect(total).toBe(10);
    })
  })
  describe('find', () => {
    const find = arrayFunctions.find;
    it ('should be a function', () => {
      expect(typeof find).toBe('function');
    })
    it ('should return the first item in an array that equals the element', () => {
      const element = find([1,2,3,4,5], (a) => {if (a === 2) return a})
      expect(element).toBe(2);
    })
  })
  describe('filter', () => {
    const filter = arrayFunctions.filter;
    it ('should be a function', () => {
      expect(typeof filter).toBe('function');
    })
    it ('should filter an array', () => {
      const filtered = filter([1,2,3,4,5,6], (a) => {if (a !==2) return a});
      expect(filtered).toEqual([1,3,4,5,6]);
    })
  })
  describe('flatten', () => {
    const flatten = arrayFunctions.flatten;
    it ('should be a function', () => {
      expect(typeof flatten).toBe('function');
    })
  })
});
