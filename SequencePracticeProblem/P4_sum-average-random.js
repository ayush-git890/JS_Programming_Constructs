let sum = 0;
let c = 5;
let arr = [];

for (let i = 0; i < c; i++) {
    let num = Math.floor(Math.random() * 90) + 10;
    arr.push(num);
    sum += num;
}

let average = sum / c;

console.log(`Random numbers are--> : ${arr}`);
console.log(`Sum is-->  ${sum}`);
console.log(`Average is-->  ${average.toFixed(2)}`);