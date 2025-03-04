"use strict";

import dropDown from "./modules/dropDown.js";
import getAllInputData from "./modules/inputData.js";
import getExchangeRates from "./modules/getExchangeRates.js";
import displayExchangeRates from "./modules/displayEchangeRate.js";

window.addEventListener("load", async () => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  document.getElementById("date-selector").value = formattedDate;

  await dropDown();
});

const convert = document.getElementById("convert");

convert.addEventListener("click", async () => {
  const inputData = getAllInputData();
  // console.log("Input data:", inputData);

  if (!inputData.date) {
    alert("Please select a date");
    return;
  }

  if (
    inputData.placeHolderArray[0].countryName === undefined ||
    inputData.placeHolderArray[1].countryName === undefined ||
    inputData.placeHolderArray[0].currency === undefined ||
    inputData.placeHolderArray[1].currency === undefined
  ) {
    alert("Please select both countries");
    return;
  }

  document.querySelector(".result-div").textContent = "Loading...";

  try {
    const exchangeRateData = await getExchangeRates(inputData);
    // console.log("Exchange rate data:", exchangeRateData);

    if (exchangeRateData) {
      displayExchangeRates(exchangeRateData, inputData);
    } else {
      document.querySelector(".result-div").textContent =
        "Failed to fetch exchange rates. Please try again.";
    }
  } catch (error) {
    console.error("Error in conversion process:", error);
    document.querySelector(".result-div").textContent =
      "An error occurred during conversion.";
  }
});
