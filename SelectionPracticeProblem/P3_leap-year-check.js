const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("please provide a 4-digit year as an argument.");
    process.exit(1);
}

let year = parseInt(args[0]);
if (year < 1000 || year > 9999) {
    console.log("please enter a valid 4-digit year.");
    process.exit(1);
}

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(`${year} is ${isLeapYear ? "a Leap Year" : "not a Leap Year"}`);