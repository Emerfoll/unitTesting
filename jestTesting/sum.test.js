// import { test } from '@jest/globals';
// import sum from './sum';

// tried to use the ES6 syntax and it throws an error. Must be written with require.
const sum = require('./sum');

test('properly adds two numbers.', () => {
    expect(sum(1, 2)).toBe(3);
})