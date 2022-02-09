const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createDog(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createDog = (e) => {
  const dog = document.createElement("i");
  dog.classList.add("fas");
  dog.classList.add("fa-dog");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  dog.style.top = `${yInside}px`;
  dog.style.left = `${xInside}px`;

  loveMe.appendChild(dog);

  times.innerHTML = ++timesClicked;

  setTimeout(() => dog.remove(), 1000);
};
