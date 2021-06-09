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

//Unsplash API
const count = 10
const apiKey = 'w2sZeKJpyMJrmHd46vRmOI9SuONeH9TohEFjFEuzcdQ'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Get photos from Unsplash API

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json()
        console.log(data)
    } catch (error)
    //catch error
}
// on load
getPhotos()


const lotteryPromise = new Promise (function(resolve, reject) {
    setTimeout(function() {
    if(Math.random() >= 0.5) {
        resolve('You WIN')
    } else {
        reject(new Error('You lost'))
    }
    }, 2000)
})

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))


const whereAmI = function(lat, lng) {
    fetch(`'https://geocode.xyz/${lat},${lng}?geoit=json'`)
    .then(response => response.json())
    .then(data => {console.log(data)})
}

whereAmI(52, 13)
