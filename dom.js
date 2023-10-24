const form= document.querySelector("#form")
console.log(form)

const DomSelectors= {
    form: document.querySelector("form"),
    card: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2") 
}

DomSelectors.form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(DomSelectors.FirstName.value);
    DomSelectors.h2s.forEach(
        (el)=> el.textContent = DomSelectors.FirstName.value)
});
