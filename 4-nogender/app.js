const form = document.forms.form;
console.log(form.elements.gender)

form.elements.submit.addEventListener("click", (event)=>{
    
    if(form.querySelector("p")) {form.removeChild(form.querySelector("p"));}
    
    event.preventDefault();
    if(form.elements.gender.value =="male") {
        createAlert("Мужчинам вход запрещен")
    }
    else if(form.elements.gender.value =="female") {
        createAlert("Женщинам вход запрещен")
    }
})

function createAlert(text) {
    const p = document.createElement("p");
    p.style.color="red";
    p.textContent = text;
    form.appendChild(p);
}