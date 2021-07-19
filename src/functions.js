"use strict";
function sum(x, y) {
    return x + y;
} // x is number, y is number, and sum should return number variable.
sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0); // Array.prototype.reduce()
}
function returnNothing() {
    console.log('I am just saying somthing tho.');
}
