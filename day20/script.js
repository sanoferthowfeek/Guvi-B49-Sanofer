async function fetchData() {
  const apiUrl = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    for (var i = 0; i < data.length; i++) {
      if (data[i].name.common == "Peru") {
        console.log(data[i].flag);
      }
    }
  } catch (err) {
    console.log("Error fetching Data: ", err);
  }
}
