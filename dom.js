const form= document.querySelector("#form")
console.log(form);

const DomSelectors= {
    form: document.querySelector("form"),
    AlbumName: document.querySelector(".album-name"),
    h2s: document.querySelectorAll("h2"),
    Img: document.querySelector(".card-cover"),
    AlbumDesc:document.querySelector(".card-descr"),
    h3s: document.querySelectorAll("h3"),
    h1s: document.querySelectorAll("h1")

}


DomSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors.AlbumName.value);
    DomSelectors.h2s.forEach(
        (el)=> el.textContent = DomSelectors.AlbumName.value)
});

DomSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DomSelectors.AlbumDesc.value);
    DomSelectors.h3s.forEach(
        (el)=> el.textContent = DomSelectors.AlbumDesc.value)
})

DomSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors.Img.value);
    DomSelectors.h1s.forEach(
        (el)=> el = DomSelectors.Img.value)
})




