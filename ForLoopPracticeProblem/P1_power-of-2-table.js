const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node power-of-2-table.js <n>");
    process.exit(1);
}

let n = parseInt(args[0]);
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}