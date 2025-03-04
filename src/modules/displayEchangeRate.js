const displayExchangeRates = (data, inputData) => {
  if (!data || !data.rates) {
    console.error("No exchange rate data available");
    document.querySelector(".result-div").textContent =
      "Exchange rate data not available";
    return;
  }

  const fromCurrency = inputData.placeHolderArray[0].currency;
  const toCurrency = inputData.placeHolderArray[1].currency;
  const amount = parseFloat(inputData.amount);

  if (isNaN(amount)) {
    document.querySelector(".result-div").textContent =
      "Please enter a valid number";
    return;
  }

  const fromRate = parseFloat(data.rates[fromCurrency]);
  const toRate = parseFloat(data.rates[toCurrency]);

  if (!fromRate || !toRate || isNaN(fromRate) || isNaN(toRate)) {
    document.querySelector(".result-div").textContent =
      "Exchange rate not available for the selected currencies";
    return;
  }

  const convertedAmount = (amount / fromRate) * toRate;

  document.querySelector(
    ".result-div"
  ).textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
    3
  )} ${toCurrency}`;
};

export default displayExchangeRates;
