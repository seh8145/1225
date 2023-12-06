const restart_1_4 = document.querySelector(".restart_1_4");
const fun_video_iframe = document.querySelector(".fun_video_iframe");

const fun_video_src_list = [
  "https://www.youtube.com/embed/MjuJyti1Uwo",
  "https://www.youtube.com/embed/5yZAUy8cgqs",
  "https://www.youtube.com/embed/EOCZYxmi7ho",
  "https://www.youtube.com/embed/qGdfOXiPTgQ",
  "https://www.youtube.com/embed/wzy7DxML_bc",
  "https://www.youtube.com/embed/aip80BfeuDg",
  "https://www.youtube.com/embed/I8yhahv4eLg",
  "https://www.youtube.com/embed/xq7L-85X5H8",
  "https://www.youtube.com/embed/uShSDKIpyTE",
  "https://www.youtube.com/embed/eQV8mkyzsT4",
];

let pre_number = 0;

function restart_youtube_1_4() {
  change_random_number();
  fun_video_iframe.src = fun_video_src_list[pre_number];
}

function change_random_number() {
  const random_number = Math.floor(Math.random() * 10);
  if (random_number == pre_number) {
    change_random_number();
  } else {
    pre_number = random_number;
  }
}

restart_1_4.addEventListener("click", restart_youtube_1_4);