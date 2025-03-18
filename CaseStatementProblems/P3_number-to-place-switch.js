const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("please provide a number as an argument");
    process.exit(1);
}

let num = parseInt(args[0]);

let flag;
switch (num) {
    case 1: flag = "Unit"; break;
    case 10: flag = "Ten"; break;
    case 100: flag = "Hundred"; break;
    case 1000: flag = "Thousand"; break;
    case 10000: flag = "Ten Thousand"; break;
    case 100000: flag = "Lakh"; break;
    case 1000000: flag = "Ten Lakh"; break;
    case 10000000: flag = "Crore"; break;
    case 100000000: flag = "Ten Crore"; break;
    default: 
        console.log("Invalid input! Enter a number like 1, 10, 100, 1000, etc.");
        process.exit(1);
}

console.log(`The place value is: ${flag}`);