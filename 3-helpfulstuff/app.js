const form = document.forms.form;
const label = form.querySelector(".label");

form.elements.submit.addEventListener("click", (event)=>{
    if(form.elements.check.checked != true) {
        event.preventDefault();
        form.elements.check.style.outline = "1px solid red";
        label.style.border = "1px solid red";

        const p = document.createElement("p");
        p.style.color = "red";
        p.textContent="Слыш прими";
        form.appendChild(p);
    }
})

form.elements.check.addEventListener("change", (event)=>{
    form.elements.check.removeAttribute("style");
    label.removeAttribute("style");
    form.removeChild(form.querySelector("p"));
})