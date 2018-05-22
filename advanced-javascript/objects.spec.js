const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const myObj = {a:'a', b: 'b', c:'c'};
describe ('objects', () => {
  describe ('keys', () => {
    const keys = objectFunctions.keys;
    it ('should be an function', () => {
      expect(typeof keys).toBe('function')
    });
    it ('should return an array of keys from an obj', () => {
      const arrKeys = keys(myObj);
      expect(Array.isArray(arrKeys)).toBeTruthy();
    })
  })
  describe ('values', () => {
    const values = objectFunctions.values;
    it('should be a function', () => {
      expect(typeof values).toBe('function');
    })
    it ('should the values from an object', () => {
      const arrValues = values(myObj);
      expect(arrValues).toEqual(['a', 'b', 'c']);
    })
  })
  describe ('mapObject', () => {
    const map = objectFunctions.mapObject;
    it ('should be a function', () => {
      expect(typeof map).toBe('function');
    })
    it ('should return a mutated object', () => {
      const mapped = map({'a':1, 'b':2, 'c':3}, (a) => {return a * 2});
      expect(mapped).toEqual({'a': 2, 'b': 4, 'c': 6});
    })
  })
  describe ('pairs', () => {
    const pairs = objectFunctions.pairs;
    it ('should be a function', () => {
      expect(typeof pairs).toBe('function');
    })
    it ('should return a multi-dimentional array of every key and value in an object', () => {
      const keyVal = pairs({a: 1, b: 2, c: 3});
      expect(keyVal).toEqual([['a', 1], ['b', 2], ['c', 3]]);
    })
  })
  describe('invert', () => {
    const invert = objectFunctions.invert;
    it ('should be a function', () => {
      expect(typeof invert).toBe('function');
    })
    it ('should flip the key and values', () => {
      const inverted = invert({a:1, b: 2, c: 3});
      expect(inverted).toEqual({1: "a", 2: "b", 3: "c"})
    })
  })
  describe('default', () => {
    const defaults = objectFunctions.defaults;
    it('should be a function', () => {
      expect(typeof defaults).toBe('function');
    })
    it ('should return the object with the default field passed in', () => {
      const defaultObj = defaults({'a': 'a', 'b': 'b'}, {'c': 'c'});
      expect(defaultObj).toEqual({ a: 'a', b: 'b', c: 'c'})
    })
  })
});
