document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        EUR: 90.12,
        USD: 83.08,
        GBP: 105.306187,
        KWD: 269.32,
        INR: 1,
        LKR: 0.25638533,
        JPY: 0.568735,
        SGD: 60.8815,
        PKR: 0.27819487,
        CAD: 60.8103,
        AUD: 53.0336,
        CNY: 11.3811407,
        KRW: 0.06194026
    };

    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
        const conversionRate = exchangeRates[fromCurrency] / exchangeRates[toCurrency];
        const result = amount * conversionRate;

        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').textContent = "Invalid currency selection.";
    }
});
