const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: node unit-conversion.js <option> <value>");
    console.log("Options:");
    console.log("1: Feet to Inch");
    console.log("2: Feet to Meter");
    console.log("3: Inch to Feet");
    console.log("4: Meter to Feet");
    process.exit(1);
}

let choice = parseInt(args[0]);
let val = parseFloat(args[1]);
let ans;

switch (choice) {
    case 1:
        ans = val * 12;
        console.log(`${val} Feet = ${ans} Inches`);
        break;
    case 2:
        ans = val * 0.3048;
        console.log(`${val} Feet = ${ans.toFixed(4)} Meters`);
        break;
    case 3:
        ans = val / 12;
        console.log(`${val} Inches = ${ans.toFixed(4)} Feet`);
        break;
    case 4:
        ans = val * 3.28084;
        console.log(`${val} Meters = ${ans.toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid option! Please select an option between 1 and 4.");
}