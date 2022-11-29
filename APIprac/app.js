const url = "http://swapi.dev/api/planets";
const btn = document.createElement("button");
btn.textContent = "Press Me!";
document.body.appendChild(btn);

const fetchData = () =>
  fetch(url).then((rep) => rep.json().then((data) => console.log(data)));

btn.addEventListener("click", fetchData);
