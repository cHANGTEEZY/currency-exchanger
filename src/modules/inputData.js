export default function getAllInputData() {
  const placeHolders = document.querySelectorAll(".place-holder");
  const placeHolderArray = Array.from(placeHolders).map((placeholder) => {
    console.log(placeholder.textContent.trim());
    const text = placeholder.textContent.trim();
    const parts = text.split(" ");
    const currency = parts.pop();
    const countryName = parts.join(" ");

    if (text === "Select a country") {
      return {
        countryName: null,
        currency: undefined
      };
    }

    return {
      countryName: countryName,
      currency: currency,
    };
  });

  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date-selector").value;

  return {
    placeHolderArray: placeHolderArray,
    amount,
    date,
  };
}
