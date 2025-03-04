import getCountries from "./fetchCountires.js";

async function dropDown() {
  const countryFrom = document.getElementById("country-from");
  const countryTo = document.getElementById("country-to");
  const countryToDropdown = document.getElementById(
    "select-country-to-dropdown"
  );
  const countryFromDropdown = document.getElementById(
    "select-country-from-dropdown"
  );

  const countries = await getCountries();

  countries.forEach((country) => {
    const toDropDownLi = document.createElement("li");
    const fromDropDownLi = document.createElement("li");

    toDropDownLi.innerHTML = `
        <p>${country.name} <span>${country.currency}</span></p>
        <img src="/images/${country.flag}.png" alt="${country.name} Flag"/>
    `;

    fromDropDownLi.innerHTML = `
        <p>${country.name} <span>${country.currency}</span></p>
        <img src="/images/${country.flag}.png" alt="${country.name} Flag"/>
    `;

    fromDropDownLi.classList.add("drop-down-li-item");
    toDropDownLi.classList.add("drop-down-li-item");

    fromDropDownLi.addEventListener("click", () => {
      countryFrom.querySelector(".place-holder").innerHTML = `
    <div class="place-holder-div">
      ${country.name} ${country.currency}<img src="./images/${country.flag}.png" alt="${country.name} Flag" />
    </div>
  `;
      countryFromDropdown.classList.remove("visible");
    });

    toDropDownLi.addEventListener("click", () => {
      countryTo.querySelector(".place-holder").innerHTML = `
    <div class="place-holder-div">
      ${country.name} ${country.currency}<img src="./images/${country.flag}.png" alt="${country.name} Flag" />
    </div>
  `;
      countryToDropdown.classList.remove("visible");
    });

    countryToDropdown.appendChild(toDropDownLi);
    countryFromDropdown.appendChild(fromDropDownLi);
  });

  countryFrom.addEventListener("click", () => {
    countryFromDropdown.classList.toggle("visible");
  });

  countryTo.addEventListener("click", () => {
    countryToDropdown.classList.toggle("visible");
  });

  document.addEventListener("click", (e) => {
    if (!countryFrom.contains(e.target)) {
      countryFromDropdown.classList.remove("visible");
    }
    if (!countryTo.contains(e.target)) {
      countryToDropdown.classList.remove("visible");
    }
  });
}

export default dropDown;
