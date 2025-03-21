// Get three numbers from command-line arguments
const args = process.argv.slice(2);
if (args.length < 3) {
    console.log("Please provide three numbers as arguments.");
    process.exit(1);
}

let a = parseFloat(args[0]);
let b = parseFloat(args[1]);
let c = parseFloat(args[2]);

// Perform arithmetic operations
let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

// Store results in an array
let results = [result1, result2, result3, result4];

// Find maximum and minimum
let maxValue = Math.max(...results);
let minValue = Math.min(...results);

// Output results
console.log(`Results:`);
console.log(`1. a + b * c = ${result1}`);
console.log(`2. a % b + c = ${result2}`);
console.log(`3. c + a / b = ${result3}`);
console.log(`4. a * b + c = ${result4}`);
console.log(`\nMaximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);