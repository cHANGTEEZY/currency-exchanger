const getCountries = async () => {
  try {
    const response = await fetch("./data/countries.json");

    if (!response.ok) {
      throw new Error(`Failed to fetch countries (${response.status}): ${response.statusText}`);
    }

    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export default getCountries;