const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a single-digit number as an argument.");
    process.exit(1);
}

let num = parseInt(args[0]);
if (isNaN(num) || num < 0 || num > 9) {
    console.log("Invalid input! Enter a single-digit number between 0 and 9.");
    process.exit(1);
}

let s;
switch (num) {
    case 0: s = "Zero"; break;
    case 1: s = "One"; break;
    case 2: s = "Two"; break;
    case 3: s = "Three"; break;
    case 4: s = "Four"; break;
    case 5: s = "Five"; break;
    case 6: s = "Six"; break;
    case 7: s = "Seven"; break;
    case 8: s = "Eight"; break;
    case 9: s = "Nine"; break;
    default: s = "Invalid";
}

console.log(`The number in words: ${s}`);