'use strict'

const request = fetch('https://restcountries.eu/rest/v2/name/portugal')

const getCountryData = function(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then(data => renderCountry(data[0]))
    //.then(function(response)
   // console.log(response)
   // return response.json() //async function(another promise) method that shows us the JSON from the response object.
}
//    .then(function(data){ //need another .then to resolve the Promise
 //   console.log(data)
  //  renderCountry(data[0])


getCountryData('portugal')