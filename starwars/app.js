const url = "https://swapi.co/api/planets";
const btn = document.createElement("button");

btn.textContent = "press me";
document.body.appendChild(btn);

function fetchData() {
  fetch(url)
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
