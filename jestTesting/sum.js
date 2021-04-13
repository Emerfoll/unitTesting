function sum(a, b) {
    return a + b;
}

// since this function is not tested, when the test is ran it will still pass all tests
// but, if we are using --coverage, we will be told this function did not run
function untestedFunction(thing) {
    return thing;
}

module.exports = sum;