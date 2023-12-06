const type_1_result_1 = document.querySelector(".type_1_result_1");
const type_1_result_1_bad = document.querySelector(".type_1_result_1_bad");
const type_1_result_2 = document.querySelector(".type_1_result_2");
const type_1_result_2_bad = document.querySelector(".type_1_result_2_bad");
const type_1_result_3 = document.querySelector(".type_1_result_3");
const type_1_result_3_bad = document.querySelector(".type_1_result_3_bad");
const type_1_result_4 = document.querySelector(".type_1_result_4");
const type_1_result_4_bad = document.querySelector(".type_1_result_4_bad");
const type_1_result_5 = document.querySelector(".type_1_result_5");
const type_1_result_5_bad = document.querySelector(".type_1_result_5_bad");
const type_1_result_6 = document.querySelector(".type_1_result_6");

const type_1_result_list = [
  type_1_result_1,
  type_1_result_2,
  type_1_result_3,
  type_1_result_4,
  type_1_result_5,
  type_1_result_6,
];

function type_1_result_bad(event) {
  step = event.currentTarget.classList[1];
  step = parseInt(step[14]);
  console.log(step);
  type_1_result_list[step].classList.remove("hidden_bu");
}

type_1_result_1_bad.addEventListener("click", type_1_result_bad);
type_1_result_2_bad.addEventListener("click", type_1_result_bad);
type_1_result_3_bad.addEventListener("click", type_1_result_bad);
type_1_result_4_bad.addEventListener("click", type_1_result_bad);
type_1_result_5_bad.addEventListener("click", type_1_result_bad);