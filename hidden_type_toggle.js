const type_1_button = document.querySelector(".type_1_button");
const type_1 = document.querySelector(".type_1");
const type_2_button = document.querySelector(".type_2_button");
const type_2 = document.querySelector(".type_2");
const next_button_box_last = document.querySelector(".next_button_box_last");

function toggle_button(event) {
  event.preventDefault();
  console.log(event.currentTarget.classList[1]);
  if (event.currentTarget.classList[1] == "type_1_button") {
    type_1.classList.remove("hidden_bu");
    type_2.classList.add("hidden_bu");
  } else {
    type_2.classList.remove("hidden_bu");
    type_1.classList.add("hidden_bu");
  }
}
function toggle_last_button(event) {
  event.preventDefault();
  type_2.classList.remove("hidden_bu");
  type_1.classList.add("hidden_bu");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

type_1_button.addEventListener("click", toggle_button);
type_2_button.addEventListener("click", toggle_button);
next_button_box_last.addEventListener("click", toggle_last_button);