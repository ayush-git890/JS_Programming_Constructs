const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a single-digit number (0-9) as an argument.");
    process.exit(1);
}

let digit = parseInt(args[0]);
if (isNaN(digit) || digit < 0 || digit > 9) {
    console.log("Invalid input! Enter a single-digit number between 0 and 9.");
    process.exit(1);
}

const numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

console.log(`The number in words: ${numberWords[digit]}`);