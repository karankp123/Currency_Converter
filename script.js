document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const exchangeRates = {
        EUR: 90.12,         // 1 EUR to INR
        USD: 83.08,         // 1 USD to INR
        GBP: 105.306187,    // 1 GBP to INR
        KWD: 269.32,        // 1 KWD to INR
        INR: 1,             // 1 INR to INR (base currency)
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
        const conversionRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        const result = amount * conversionRate;

        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').textContent = "Invalid currency selection.";
    }
});
