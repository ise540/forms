const submit = document.querySelector(".submit");
const fields = document.querySelectorAll("input");

submit.addEventListener("click", (event) => {
  Array.from(fields).forEach((item) => {
    if (item.value == "") {
      event.preventDefault();
      item.style.border = "1px red solid";
    }
  });
});
