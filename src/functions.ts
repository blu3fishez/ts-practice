function sum(x: number, y: number): number {
    return x + y;
} // x is number, y is number, and sum should return number variable.
  
sum(1, 2);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0); // Array.prototype.reduce()
}

function returnNothing(): void {
    console.log('I am just saying somthing tho.');
}