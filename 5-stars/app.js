const form = document.forms.form;
const stars = document.querySelectorAll(".star-container i");
const starsContainer = document.querySelector(".star-container");
const submit = form.elements.submit;

starsContainer.addEventListener("mouseover", clickZalupaHandler);

function clickZalupaHandler(event) {
  if (Array.from(stars).indexOf(event.target) != -1) colorize(event.target);
}

function colorize(elem) {
  elem.classList.add("active");
  elem.classList.remove("empty");

  if (elem.previousElementSibling) {
    colorizePrev(elem.previousElementSibling);
  }

  if (elem.nextElementSibling) {
    colorizeNext(elem.nextElementSibling);
  }
}

function colorizeNext(elem) {
  elem.classList.add("empty");
  elem.classList.remove("active");
  if (elem.nextElementSibling) {
    let next = elem.nextElementSibling;
    colorizeNext(next);
  }
}
function colorizePrev(elem) {
  elem.classList.add("active");
  elem.classList.remove("empty");
  if (elem.previousElementSibling) {
    let prev = elem.previousElementSibling;
    colorizePrev(prev);
  }
}

starsContainer.addEventListener("mouseleave", clearStars);

function clearStars() {
  Array.from(stars).forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      item.classList.add("empty");
    }
  });
}

starsContainer.addEventListener("click", (event) => {
  starsContainer.removeEventListener("mouseleave", clearStars);
  starsContainer.removeEventListener("mouseover", clickZalupaHandler);

  clickZalupaHandler(event);
  Array.from(stars).forEach((item) => item.removeAttribute("checked"));
  if (Array.from(stars).indexOf(event.target) != -1)
    event.target.setAttribute("checked", true);
});

submit.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    !Array.from(stars).find((item) => item.hasAttribute("checked")) ||
    form.elements.review.value.length < 10
  ) {
    let p = document.createElement("p");
    p.textContent = "Поля заполни слыш";
    form.appendChild(p);
    setTimeout(() => form.removeChild(p), 1000);
    return;
  } else {
    let rating =
      Array.from(stars).findIndex((item) => {
        return item.hasAttribute("checked");
      }) + 1;

    let result = { rating: rating, comment: form.elements.review.value };
    console.log(result);
  }
});
