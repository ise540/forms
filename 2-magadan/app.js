if (window.location.search.startsWith("?")) {
const header = document.createElement("h1");
header.textContent =`Еду в ${decodeURI(window.location.search.split("=")[1].replace("+", " "))}`;
document.querySelector("body").insertAdjacentElement("afterbegin", header);
}

const select = document.querySelector(".select");
const submit = document.querySelector(".submit");

(async () => {
    const response = await fetch(
      "https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia"
    );
    const data = await response.json();

    let cities = [];
    data.forEach(element => {
        cities.push(element.city)
    });
    cities.forEach(element => {
        const elem = document.createElement("option");
        elem.textContent=element;
        select.appendChild(elem);
    })
    })();

submit.addEventListener("click", (event)=>{
    if(select.selectedIndex == 0) {
        event.preventDefault();
        select.style.border = "1px red solid"
    }
})