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
})
