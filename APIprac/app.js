const url = "http://swapi.dev/api/planets";

const fetchData = function () {
  fetch(url).then((rep) => console.log(rep));
};
