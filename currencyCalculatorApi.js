// currencyCalculator.js
const axios = require('axios');

async function getExchangeRates(baseCurrency) {
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        return response.data.rates;
    } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
        throw new Error('Failed to fetch exchange rates');
    }
}

function convertCurrency(amount, fromCurrency, toCurrency, exchangeRates) {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    if (!fromRate || !toRate) {
        throw new Error('Invalid currency');
    }

    return (amount * toRate) / fromRate;
}

module.exports = {
    getExchangeRates,
    convertCurrency
};
