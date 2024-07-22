const input = require('sync-input');

// Conversion rates
const currenciesConverter = {
    "JPY": 113.5,
    "EUR": 0.89,
    "RUB": 74.36,
    "USD": 1,
    "GBP": 0.75
};

// Welcome message
console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");

// Main loop
while (true) {
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");

    let choice = Number(input());

    if (choice === 2) {
        console.log("Have a nice day!");
        break;
    } else if (choice !== 1) {
        console.log("Unknown input");
        continue;
    }

    // Conversion option
    console.log("What do you want to convert?");
    let from = input("From: ").toUpperCase();

    if (!currenciesConverter[from]) {
        console.log("Unknown currency");
        continue;
    }

    let to = input("To: ").toUpperCase();

    if (!currenciesConverter[to]) {
        console.log("Unknown currency");
        continue;
    }

    let amount = Number(input("Amount: "));

    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        continue;
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1");
        continue;
    }

    // Perform conversion
    let convertedAmount = (amount * currenciesConverter[to]) / currenciesConverter[from];
    console.log(`Result: ${amount} ${from} equals ${convertedAmount.toFixed(4)} ${to}`);
}
