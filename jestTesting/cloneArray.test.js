const { test, expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('Clones an array', () => {
    expect(cloneArray([1, 3, 11])).toStrictEqual([1, 3, 11])
})