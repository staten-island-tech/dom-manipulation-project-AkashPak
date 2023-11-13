const form = document.querySelector("#form");
console.log(form);

const DomSelectors = {
  form: document.querySelector("form"),
  AlbumName: document.querySelector(".album-name"),
  Img: document.querySelector(".album-cover"),
  AlbumDesc: document.querySelector(".album-descr"),
  box: document.querySelector(".flex-container"),
};

<<<<<<< Updated upstream
function Addcard() {
  DomSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="albumcard">
    <h1 class="title"> ${DomSelectors.AlbumName.value}</h1>
   <img src="${DomSelectors.Img.value}" alt="" class="image">
   <h2 class='descr'> ${DomSelectors.AlbumDesc.value}</h2>
    <button class="btn">Remove</button>
  </div>`
  );
const func= 
document.querySelector(".btn").addEventListener(
    "click", this.parentNode.remove())
    console.log(func)
}
=======

  DomSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(DomSelectors.Img.src)
    DomSelectors.h3s.forEach(
      (el)=> (el.src = DomSelectors.Img.src)
    )
    console.log(DomSelectors.AlbumDesc.value);
    DomSelectors.h2s.forEach(
      (el) => (el.textContent = DomSelectors.AlbumDesc.value)
    );

    console.log(DomSelectors.AlbumName.value);
    DomSelectors.h1s.forEach(
      (el) => (el.textContent = DomSelectors.AlbumName.value)
    ); });
>>>>>>> Stashed changes



DomSelectors.form.addEventListener("submit", (e) => {
  e.preventDefault();

  Addcard();
});
