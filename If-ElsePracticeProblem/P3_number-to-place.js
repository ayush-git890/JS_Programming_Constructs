const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("please provide a number as an argument.");
    process.exit(1);
}

let num = parseInt(args[0]);
const temp = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh",
    10000000: "Crore",
    100000000: "Ten Crore"
};

if (temp[num]) {
    console.log(`The place value is: ${temp[num]}`);
} else {
    console.log("Invalid input! Enter a number like 1, 10, 100, 1000, etc.");
}