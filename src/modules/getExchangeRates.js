const BASE_URL = "https://api.currencyfreaks.com/v2.0/rates/";
const API_KEY = import.meta.env.VITE_API_KEY;

const getExchangeRates = async (inputData) => {
  // console.log("Input data received", inputData);

  if (!inputData.placeHolderArray || inputData.placeHolderArray.length < 2) {
    console.error("Invalid input data: Missing currency information.");
    return null;
  }

  const fromCurrency = inputData.placeHolderArray[0].currency;
  const toCurrency = inputData.placeHolderArray[1].currency;
  const date = inputData.date; // Get the date from input data

  if (!fromCurrency || !toCurrency) {
    console.error("Invalid input data: Missing currency codes.");
    return null;
  }

  const symbols = `${fromCurrency},${toCurrency}`;

  const endpoint = date === new Date().toISOString().split('T')[0] ?
    'latest' :
    `historical?date=${date}`;

  let API_URL = `${BASE_URL}${endpoint}?apikey=${API_KEY}&symbols=${symbols}`;


  if (endpoint !== 'latest') {
    API_URL = `${BASE_URL}${endpoint}&apikey=${API_KEY}&symbols=${symbols}`;
  }



  try {
    if (!API_KEY) {
      throw new Error("No API Key SET");
    }

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      console.error("Error:", data.error.message);
      return null;
    } else {
      return data;
    }
  } catch (error) {
    console.error(
      error.message || "Something went wrong, Internal server error 5000"
    );
    return null;
  }
};

export default getExchangeRates;