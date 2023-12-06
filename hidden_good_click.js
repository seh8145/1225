const good_return_1 = document.querySelector(".good_return_1");
const good_return_2 = document.querySelector(".good_return_2");
const good_return_3 = document.querySelector(".good_return_3");
const good_return_4 = document.querySelector(".good_return_4");
const good_return_5 = document.querySelector(".good_return_5");
const good_return_6 = document.querySelector(".good_return_6");
const good_return_7 = document.querySelector(".good_return_7");

const type_1_result_1_good = document.querySelector(".type_1_result_1_good");
const type_1_result_2_good = document.querySelector(".type_1_result_2_good");
const type_1_result_3_good = document.querySelector(".type_1_result_3_good");
const type_1_result_4_good = document.querySelector(".type_1_result_4_good");
const type_1_result_5_good = document.querySelector(".type_1_result_5_good");

function startDelayedFunction() {
  good_return_1.classList.remove("hidden_good");
  good_return_2.classList.remove("hidden_good");
  good_return_3.classList.remove("hidden_good");
  good_return_4.classList.remove("hidden_good");
  good_return_5.classList.remove("hidden_good");
  good_return_6.classList.remove("hidden_good");
  good_return_7.classList.remove("hidden_good");
  setTimeout(delayedFunction, 2000);
}

function delayedFunction() {
  good_return_1.classList.add("hidden_good");
  good_return_2.classList.add("hidden_good");
  good_return_3.classList.add("hidden_good");
  good_return_4.classList.add("hidden_good");
  good_return_5.classList.add("hidden_good");
  good_return_6.classList.add("hidden_good");
  good_return_7.classList.add("hidden_good");
}

type_1_result_1_good.addEventListener("click", startDelayedFunction);
type_1_result_2_good.addEventListener("click", startDelayedFunction);
type_1_result_3_good.addEventListener("click", startDelayedFunction);
type_1_result_4_good.addEventListener("click", startDelayedFunction);
type_1_result_5_good.addEventListener("click", startDelayedFunction);