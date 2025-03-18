const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Please provide both day and month as arguments.....");
    process.exit(1);
}

let day = parseInt(args[0]);
let month = parseInt(args[1]);

let isValid = (month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day <= 20);

console.log(isValid);