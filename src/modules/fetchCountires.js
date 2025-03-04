const getCountries = async () => {
  const response = await fetch("./data/countries.json");
  const countries = await response.json();
  return countries;
};

export default getCountries;
