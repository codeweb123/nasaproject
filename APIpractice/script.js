// 'use strict'

// const request = fetch('https://restcountries.eu/rest/v2/name/portugal')

// const getCountryData = function(country) {
// fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// .then((response) => response.json())
// .then(data => renderCountry(data[0]))
// //.then(function(response)
// // console.log(response)
// // return response.json() //async function(another promise) method that shows us the JSON from the response object.
// }
// //    .then(function(data){ //need another .then to resolve the Promise
// //   console.log(data)
// //  renderCountry(data[0])

// getCountryData('portugal')

// //Unsplash API
// const count = 10
// const apiKey = 'w2sZeKJpyMJrmHd46vRmOI9SuONeH9TohEFjFEuzcdQ'
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// //Get photos from Unsplash API

// async function getPhotos() {
// try {
// const response = await fetch(apiUrl);
// const data = await response.json()
// console.log(data)
// } catch (error)
// //catch error
// }
// // on load
// getPhotos()


// const lotteryPromise = new Promise (function(resolve, reject) {
// setTimeout(function() {
// if(Math.random() >= 0.5) {
// resolve('You WIN')
// } else {
// reject(new Error('You lost'))
// }
// }, 2000)
// })

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err))


const whereAmI = function(lat, lng) {
    fetch(`'https://geocode.xyz/${lat},${lng}?geoit=json'`)
    .then(response => {
        return response.json())
    }
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
        return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
        if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
        return response.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);


const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images')
;

const createImage = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function(){
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function(){
            reject(new Error('Image not found'))
        })
    });
};

let currentImg;

createImage('img/img-1.jpg')
    .then(img => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2)
})
.then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
})
.then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
})
.then(() => {
    currentImg.style.display = 'none';
})
.catch(err => console.error(err));


const whereAmI = async function(country) {
    const response = await fetch(`https://restcountries.eu/rest/v2/${country}`);
    const data = await response.json();
    console.log(data);
    renderCountry(data[0]);
}
//exactly the same as above function ( no .then)
fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(response => console.log(response));



try {
    let y = 1;
    const x = 2;
    y = 3;
} catch (err) {
    alert(err.message);
}

const res = await fetch(url)
if(!res.ok) throw new Error('Problem getting ')


const get3Countries = async function




//takes an array of Promises that returns a new Promise that 
//runs all Promises in the array at the same time. 
//gives us an error if there is a rejected Promise.

const data = await Promise.all([
    getJSON(`https`),
    getJSON(`https`),
    getJSON(`https`),
]);
console.log(data.map(d => d[0].capital));
} catch (err) {
    console.error(err);
}
};

//Promise.race- displays the one that runs the fastest. ( rejected or settled )
async function() {
    const response = await Promise.race([
        getJSON(`https`),
        getJSON(`https`),
        getJSON(`https`), 
    ])
    console.log(res[0]);
})();

const timeout = function(sec) {
    return new Promise(function(_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'));
        }, sec * 1000);
    });
};

Promise.race([
    getJSON(`https`), timeout(0.15),
])
.then(res => console.log(res[0]))
.catch(err => console.error(err));



//never short circuits, returns all of the promises, including the rejected ones)
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another Success'),
]).then(response => console.log(response));
.catch(err => console.error(err))

Promise.any

const loadNPause = async function() {
    try {
        let img = await createImage('img/img-1.jpg')
    } catch(error) {
        console.log(error)
    }
}

const data = await Promise.all([
    getJSON(`https`),
    getJSON(`https`),
    getJSON(`https`),
]);
console.log(data.map(d => d[0].capital));
} catch (err) {
    console.error(err);
}
};

const data = await Promise.all([
    getJSON(`https`),
    getJSON(`https`),
    getJSON(`https`),
]);
console.log(data.map(d => d[0].capital));
} catch (err) {
    console.error(err)
}