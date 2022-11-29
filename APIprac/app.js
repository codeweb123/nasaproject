/* const arr1 = [5, 2, 1, 5, 7, 9, 1, 7433];

const arr2 = arr1.map(function (x) {
  return x * 5;
});
*/

//starwars api practice
const btn = document.createElement("button");
btn.textContent = "press me";
document.body.appendChild(btn);
btn.addEventListener("click", function () {
  fetchData("http://swapi.dev/api/planets");
});
const output = document.createElement("div");
document.body.appendChild(output);

function outputPlanets(data) {
  console.log(data);
}

function fetchData(url) {
  fetch(url)
    .then((rep) => rep.json())
    .then(function (data) {
      output.textContent = `${data.count} results found.`;
      if (data.next) {
        const btn2 = document.createElement("button");
        btn2.textContent = "next";
        output.appendChild(btn2);
        btn2.addEventListener("click", function () {
          fetchData(data.next);
        });
      }

      const planets = data.results.map(function (item) {
        console.log(item);
        return { name: item.name, films: item.films };
      });
      console.log(planets);
    });
}

/* const btn = document.createElement("button");
btn.textContent = "Press Me!";
document.body.appendChild(btn);

const output = document.createElement("div");
document.body.appendChild(output);

btn.addEventListener("click", function () {
  fetchData("http://swapi.dev/api/planets");
});

const fetchData = (url) =>
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => (output.textContent = `${data.count} results found.`));
if (data.next) {
  const btn2 = document.createElement("button");
  btn2.textContent = "next";
  output.appendChild(btn2);
  btn2.addEventListener("click", function () {
    fetchData(data.next);
  });
  console.log(data);
} */
