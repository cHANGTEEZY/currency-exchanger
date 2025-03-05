"use strict";

import dropDown from "./modules/dropDown.js";
import getAllInputData from "./modules/inputData.js";
import getExchangeRates from "./modules/getExchangeRates.js";
import displayExchangeRates from "./modules/displayEchangeRate.js";

const onLoad = async () => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];
  document.getElementById("date-selector").max = formattedDate;
  document.getElementById("date-selector").value = formattedDate;

  await dropDown();
};

onLoad();

const convert = document.getElementById("convert");
convert.addEventListener("click", async () => {
  const inputData = getAllInputData();

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
  convert.disabled = true;

  try {
    const exchangeRateData = await getExchangeRates(inputData);

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
  } finally {
    convert.disabled = false;
  }
});
