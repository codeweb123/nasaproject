const btn = document.createElement("button");
btn.textContent = "press me";
document.body.appendChild(btn);
btn.addEventListener("click", function () {
  fetchData("http://swapi.dev/api/planets");
});
const output = document.createElement("div");
document.body.appendChild(output);

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
      console.log(data);
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
