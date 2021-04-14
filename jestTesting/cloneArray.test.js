const { test, expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('Clones an array', () => {
    array = [1, 3, 11]
    // .toEqual is required here instead of .toBe because although they are "the same" 
    // they are stored in different memory files. .toEqual checks if the value is the same.
    expect(cloneArray(array)).toEqual(array)
    // this test makes sure that the returned array is a clone of the original array and
    // the test didn't just return the original array.
    expect(cloneArray(array)).not.toBe(array)
})

test('Clones an array', () => {
    array = [1, 3, 11]
    // .toEqual is required here instead of .toBe because although they are "the same" 
    // they are stored in different memory files. .toEqual checks if the value is the same.
    expect(cloneArray(array)).toEqual(array)
    // this test makes sure that the returned array is a clone of the original array and
    // the test didn't just return the original array.
    expect(cloneArray(array)).not.toBe(array)
})