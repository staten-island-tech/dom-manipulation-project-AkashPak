const form = document.querySelector("#form");
console.log(form);

const DomSelectors = {
  form: document.querySelector("form"),
  AlbumName: document.querySelector(".album-name"),
  Img: document.querySelector(".album-cover"),
  AlbumDesc: document.querySelector(".album-descr"),
  box: document.querySelector(".flex-container"),
};

function Addcard() {
  DomSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="albumcard">
    <h1 class="title"> ${DomSelectors.AlbumName.value}</h1>
   <img src="${DomSelectors.Img.value}" alt="" class="image">
   <h2 class='descr'> ${DomSelectors.AlbumDesc.value}</h2>
    <button class="btn" onclick="this.parentNode.remove()" >Remove</button>
  </div>`
  );
}
DomSelectors.form.addEventListener("submit", (e) => {
  e.preventDefault();

  Addcard();
});
