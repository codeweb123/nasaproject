const url = "http://swapi.dev/api/planets";

function fetchData() {
  fetch(url).then(function (rep) {
    console.log(rep);
  });
}
