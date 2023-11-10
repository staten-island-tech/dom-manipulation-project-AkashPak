const form = document.querySelector("#form");
console.log(form);

const DomSelectors = {
  form: document.querySelector("form"),
  AlbumName: document.querySelector(".album-name"),
  h2s: document.querySelectorAll("h2"),
  Img: document.querySelector(".album-cover"),
  AlbumDesc: document.querySelector(".album-descr"),
  h1s: document.querySelectorAll("h1"),
  button: document.getElementById(".submit"),
  box: document.querySelector(".flex-container"),
  tite: document.querySelector(".title"),
  rmv: document.querySelector(".rmvbtn"),
  finalimage: document.querySelector(".img"),
  finaldesc: document.querySelector(".description"),
};

function Card() {
  DomSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();

    console, log(DomSelectors.AlbumDesc.value);
    DomSelectors.h2s.forEach(
      (el) => (el.textContent = DomSelectors.AlbumDesc.value)
    );

    console.log(DomSelectors.AlbumName.value);
    DomSelectors.h1s.forEach(
      (el) => (el.textContent = DomSelectors.AlbumName.value)
    );
  });
}
const imagead={
  im: DomSelectors.Img.src
}
function Addcard(func){
document.querySelector(".flex-container").insertAdjacentHTML("beforeend",
`<div class="albumcard"
<h1 class="title"></h1>
<h2 class="description"> </h2>
  <img src= "${func.im}" alt="" class="img" > 
  <button class="rmvbtn">Delete</button>
  </div>`)
  const rembtn = document.querySelector(".rmvbtn");
  rembtn.addEventListener("click", () => rembtn.parentElement.remove(func));
  }
DomSelectors.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const FinCard = Card();
  Addcard(FinCard);
  remove();
});

function remove() {
  DomSelectors.AlbumDesc.value = null;
  DomSelectors.AlbumName.value = null;
  DomSelectors.Img.src = null;
}
