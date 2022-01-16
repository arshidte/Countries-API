function getCountry() {
  let countryName = cntry_name.value;
  fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).then(res => res.json()).then(data => {
    populateValues(data)


  })
}



function populateValues(country) {
  let cntryName = country[0].name;
  let flag = country[0].flag;
  let population = country[0].population;
  let currencyName = country[0].currencies[0].name;
  let currencySymbol = country[0].currencies[0].symbol;
  let lang = country[0].languages[0].name;
  let capital = country[0].capital;

  let html_data = `
  <div class="card" style="width: 18rem;">
  <img src="${flag}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">Country Name: ${cntryName}</h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Language: ${lang}</li>
  <li class="list-group-item">Population: ${population}</li>
  <li class="list-group-item">Capital: ${capital}</li>
  <li class="list-group-item">Currency name: ${currencyName}</li>
  <li class="list-group-item">Currency symbol: ${currencySymbol}</li>
  </ul>
  </div>`;

  document.querySelector('#result').innerHTML = html_data

}

var select = document.querySelector('#countrySelector');
fetch(`https://restcountries.com/v2/all`).then(res => res.json()).then(countries => {
  console.log(countries);
  listCountries(countries);
});

function listCountries(countries) {
  countries.forEach(country => {
    let opt = document.createElement('option');
    opt.text = country.name;
    opt.value = country.name;
    select.append(opt);
  })
}

function selectCountry() {
  let selectedCountry = document.querySelector('#countrySelector').value;
  fetch(`https://restcountries.com/v2/name/${selectedCountry}?fullText=true`).then(res => res.json()).then(cntry => {
    populateValues(cntry)
  })
}