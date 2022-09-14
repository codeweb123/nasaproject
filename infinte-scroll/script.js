const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

const count = 10;
const apiKey = "iFGcsJGbAFjC-mkoHNQu2w3PIlxnD5EC_QVbIUostEQ";
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}

getPhotos();
