const resultsNav = document.getElementById("resultsNav");
const favoritesNav = document.getElementById("favoritesNav");
const imagesContainer = document.querySelector(".images-container");
const saveConfirmed = document.querySelector(".save-confirmed");
const loader = document.querySelector(".loader");

const count = 10;
const apiKey = "DEMO_KEY";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];
let favorites = {};

function createDOMNodes(page) {
  const currentArray = page === "results" ? resultsArray : favorites;
  console.log(page);
  resultsArray.forEach((result) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const link = document.createElement("a");
    link.href = result.hdurl;
    link.title = "View Full Image";
    link.target = "_blank";

    const image = document.createElement("img");
    image.src = result.url;
    image.alt = "NASA Picture of the Day";
    image.loading = "lazy";
    image.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = result.title;

    const saveText = document.createElement("p");
    saveText.classList.add("clickable");
    saveText.textContent = "Add To Favorites";
    saveText.setAttribute("onclick", `saveFavorite('${result.url}')`);

    const cardText = document.createElement("p");
    cardText.textContent = result.explanation;

    const footer = document.createElement("small");
    footer.classList.add("text-muted");

    const date = document.createElement("strong");
    date.textContent = result.date;

    const copyrightResult =
      result.copyright === undefined ? " " : result.copyright;

    const copyright = document.createElement("span");
    copyright.textContent = `${copyrightResult}`;

    footer.append(date, copyright);
    cardBody.append(cardTitle, cardText, saveText, footer);
    link.appendChild(image);
    card.append(link, cardBody);
    imagesContainer.appendChild(card);
  });
}

const updateDOM = (page) => {
  if (localStorage.getItem("nasaFavorites")) {
    favorites = JSON.parse(localStorage.getItem("nasaFavorites"));
    console.log("favorites from localStorge", favorites);
  }
  createDOMNodes(page);
};

async function getNasaPhotos() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    updateDOM("favorites");
  } catch (error) {}
}

const saveFavorite = (itemUrl) => {
  //loop through results array
  resultsArray.forEach((item) => {
    if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
      favorites[itemUrl] = item;
      //show save confirmation for 2 seconds
      saveConfirmed.hidden = false;
      setTimeout(() => {
        saveConfirmed.hidden = true;
      }, 2000);

      // set favorites in local storage : (need to stringify)
      localStorage.setItem("nasaFavorites", JSON.stringify(favorites));
    }
  });
};

getNasaPhotos();
