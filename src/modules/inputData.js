export default function getAllInputData() {
  const placeHolders = document.querySelectorAll(".place-holder");
  const placeHolderArray = Array.from(placeHolders).map((placeholder) => {
    const text = placeholder.textContent.trim();


    if (text === "Select a country") {
      return {
        countryName: null,
        currency: undefined
      };
    }


    if (placeholder.querySelector('.place-holder-div')) {

      const content = placeholder.textContent.trim();

      const currencyMatch = content.match(/[A-Z]{3}/);
      const currency = currencyMatch ? currencyMatch[0] : undefined;

      const countryName = content.replace(currency, '').trim();

      return {
        countryName,
        currency
      };
    }


    const parts = text.split(" ");
    const currency = parts.pop();
    const countryName = parts.join(" ");

    return {
      countryName,
      currency
    };
  });

  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date-selector").value;

  return {
    placeHolderArray,
    amount,
    date,
  };
}