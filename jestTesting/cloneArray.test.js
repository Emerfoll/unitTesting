const { test, expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('Clones an array', () => {
    // .toEqual is required here instead of .toBe because although they are "the same" 
    // they are stored in different memory files. .toEqual checks if the value is the same.
    expect(cloneArray([1, 3, 11])).toEqual([1, 3, 11])
})