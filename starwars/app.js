const btn = document.createElement("button");
btn.textContent = "press me";
document.body.appendChild(btn);
btn.addEventListener("click", function () {
  fetchData("https://pokeapi.co/api/v2/pokemon/ditto");
});
const output = document.createElement("div");
document.body.appendChild(output);

function fetchData(url) {
  fetch(url)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      output.textContent = `${data.height} height found.`;
      if (data.name) {
        const btn2 = document.createElement("button");
        btn2.textContent = "name";
        output.appendChild(btn2);
        btn2.addEventListener("click", function () {
          fetchData(data.name);
        });
      }
      console.log(data);
    });
}
