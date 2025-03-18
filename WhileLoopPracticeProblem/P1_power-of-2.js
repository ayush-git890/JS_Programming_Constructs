const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node power-of-2-while.js <n>");
    process.exit(1);
}

let n = parseInt(args[0]);
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

console.log(`Powers of 2 up to 2^${n} (till 256 is reached):`);

let i = 0;
let power = 1;

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2; 
    i++;
}