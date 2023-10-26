const form= document.querySelector("#form")
console.log(form)

const DomSelectors= {
    form: document.querySelector("form"),
    AlbumName: document.querySelector(".album-name"),
    h2s: document.querySelectorAll("h2") 
}
const DomSelectors1={
    form: document.querySelector("form"),
    AlbumCover: document.querySelector(".album-cover"),
    h3s: document.querySelector("h3")
}

DomSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors.AlbumName.value);
    DomSelectors.h2s.forEach(
        (el)=> el.textContent = DomSelectors.AlbumName.value)
});

DomSelectors1.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors1.AlbumCover.value);

  
});


