const form= document.querySelector("#form")
console.log(form);

const DomSelectors= {
    form: document.querySelector("form"),
    AlbumName: document.querySelector(".album-name"),
    h2s: document.querySelectorAll("h2"),
    Img: document.querySelector(".card-cover"),
    AlbumDesc:document.querySelector(".card-descr"),
    h3s: document.querySelectorAll("h3"),
    h1s: document.querySelectorAll("h1"),
    button: document.getElementById(".submit"),
    allinput: document.getElementById(".input"),
    box: document.querySelector(".flex-container")

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
    (el)=> el.textContent = DomSelectors.AlbumDesc.value);
    
    console.log(DomSelectors.AlbumName.value);
    DomSelectors.h2s.forEach(
        (el)=> el.textContent = DomSelectors.AlbumName.value)
       
     console.log(DomSelectors.Img.src);
        DomSelectors.h1s.forEach(
            (el)=> el.textContent = DomSelectors.Img.src)
    })






function Addcard(){
    DomSelectors.button.addEventListener("click", function(){
        let input=  DomSelectors.allinput.value;
        DomSelectors.box.insertAdjacentHTML("beforeend", 
    '<p> $(input) <p>')
    })
   
}