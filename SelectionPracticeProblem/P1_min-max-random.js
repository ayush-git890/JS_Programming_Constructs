let arr = [];
let count = 5;

for (let i = 0; i < count; i++) {
    let num = Math.floor(Math.random() * 900) + 100;
    arr.push(num);
}

let min = Math.min(...arr);
let max = Math.max(...arr);

console.log(`Random Numbers: ${arr}`);
console.log(`Minimum Value: ${min}`);
console.log(`Maximum Value: ${max}`);