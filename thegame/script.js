const button = document.querySelector(".button");

function playMoo() {
  const audioElement = new Audio("Cow-moo-sound.mp3");
  audioElement.play();
}

button.addEventListener("click", playMoo);
