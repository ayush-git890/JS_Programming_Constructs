function celsiusToFahrenheit(degC) {
    if (degC < 0 || degC > 100) {
        console.log("Temperature out of range! Please enter Celsius between 0°C and 100°C.");
        return;
    }
    let degF = (degC * 9/5) + 32;
    console.log(`${degC}°C = ${degF.toFixed(2)}°F`);
}
function fahrenheitToCelsius(degF) {
    if (degF < 32 || degF > 212) {
        console.log("Temperature out of range! Please enter Fahrenheit between 32°F and 212°F.");
        return;
    }
    let degC = (degF - 32) * 5/9;
    console.log(`${degF}°F = ${degC.toFixed(2)}°C`);
}

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node temperature-conversion-function.js <option> <value>");
    console.log("Options:");
    console.log("1: Celsius to Fahrenheit");
    console.log("2: Fahrenheit to Celsius");
    process.exit(1);
}

let option = parseInt(args[0]);
let value = parseFloat(args[1]);

switch (option) {
    case 1:
        celsiusToFahrenheit(value);
        break;
    case 2:
        fahrenheitToCelsius(value);
        break;
    default:
        console.log("Invalid option! Please select 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius.");
}