const { getExchangeRates, convertCurrency } = require("./currencyCalculatorApi");

async function main() {
    try {
        // Call the first web service
        const exchangeRates = await getExchangeRates("USD");

        console.log(exchangeRates);
        const amount = convertCurrency( 200, "USD", "INR", exchangeRates);

        console.log('Response from the conversion:', amount, 'INR');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();

module.exports = {
    getExchangeRates,
    convertCurrency
};