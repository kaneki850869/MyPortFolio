fetch("https://restcountries.com/v3/all")
  .then((res) => res.json())
  .then((data) => showData(data));

function showData(data) {
  for (d of data) {
    console.log(d);
  }
}
