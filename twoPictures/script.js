const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 1;

for (let i = 0; i < rows * 2; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}x${randomNr()}`;
  container.appendChild(img);
}

function randomNr() {
  return Math.floor(Math.random() * 3) + 300;
}
