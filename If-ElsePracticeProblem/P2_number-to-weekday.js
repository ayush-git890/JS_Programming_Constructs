const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Please provide a number (1-7) as an argument.");
    process.exit(1);
}

let number = parseInt(args[0]);
if (isNaN(number) || number < 1 || number > 7) {
    console.log("Invalid input! Enter a number between 1 and 7.");
    process.exit(1);
}

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`The day is: ${weekDays[number - 1]}`);