const btn = document.createElement("button");
btn.textContent = "press me";
document.body.appendChild(btn);
const output = document.createElement("div");
document.body.appendChild(output);

const pokeMon = function pokeMon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((response) => response.json())
    .then((data) => (output.textContent = `${data.count} results found.`));
};

btn.addEventListener("click", pokeMon);
