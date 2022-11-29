const url = "http://swapi.dev/api/planets";

const fetchData = function () {
  fetch(url).then((rep) => response.json().then((data) => console.log(data)));
};
