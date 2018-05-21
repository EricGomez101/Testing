const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project two test cases', () => {
  it ('should return larger of two variable', () => {
    const biggest = funcs.getBiggest;
    expect(biggest(5, 4)).toEqual(5);
  })
  it ('should return a greeting in the language specified', () => {
    const greeting = funcs.greeting;
    expect(greeting('German')).toEqual('Guten Tag!');
  })
  it ('should return true if the var is either ten or five', () => {
    const isTenOrFive = funcs.isTenOrFive;
    expect(isTenOrFive(5)).toBeTruthy();
  })
  it ('should reutnr true if within 49 and 21', () => {
    const isInRange = funcs.isInRange;
    expect(isInRange(29)).toBeTruthy();
  })
  it ('should reutrn true if num is an integer', () => {
    const isInteger = funcs.isInteger;
    expect(isInteger(2)).toBeTruthy();
  })
  it ('fizz buzz algo', () => {
    const fizzBuzz = funcs.fizzBuzz;
    expect(fizzBuzz(15)).toMatch('fizzbuzz');
  })
  it ('should return true if a number is a prime', () => {
    const isPrime = funcs.isPrime;
    expect(isPrime(17)).toBeTruthy();
  })
  it ('should reutrn the first item in an array', () => {
    const returnFirst = funcs.returnFirst;
    expect(returnFirst([14,2,3,4,5])).toEqual(14);
  })
  it ('should return the last item in an array', () => {
    const returnLast = funcs.returnLast;
    expect(returnLast([1,2,3,5,6,734,2])).toEqual(2);
  })
  it ('should return the length of an array', () => {
    const getArrLen = funcs.getArrayLength;
    expect(getArrLen([1,2,3,45,67,745])).toEqual(6);
  })
  it ('should return the length of an incremeted array', () => {
    const increment = funcs.incrementByOne;
    expect(increment([1,2,3])).toEqual([2,3,4]);
  })
  it ('should add an item to an array', () => {
    const addIToArr = funcs.addItemToArray;
    expect(addIToArr([1,2,3], "h")).toMatchObject([1, 2, 3, "h"]);
  })
  it ('should add an item to the array', () => {
    const addToFront = funcs.addItemToFront;
    expect(addToFront([1,2,34], 64)).toMatchObject([64,1,2,34]);
  })
  it ('should convert words into a sentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    expect(wordsToSentence(['hello', 'worlds'])).toMatch('hello worlds');
  })
  it ('should contain the second param within the first param', () => {
    const contain = funcs.contains;
    expect(contain([1,2,3,4,5], 5)).toBeTruthy();
  })
  it ('should sum an array of numbers', () => {
    const addNum = funcs.addNumbers;
    expect(addNum([1,2,3,4,5])).toEqual(15);
  })
  it ('should return the average test scores', () => {
    const avgTestScore = funcs.averageTestScore;
    expect(avgTestScore([15,12,22,34])).toEqual(20.75)
  })
  it ('should return the largest number in an array', () => {
    const largest = funcs.largestNumber;
    expect(largest([22,14,34,56,2])).toEqual(56);
  })
})
