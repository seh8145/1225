const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { ask_1_1, ask_1_2, ask_1_3, ask_1_4 } = require("./openAI");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/restart_1_1", async (req, res) => {
  // Ask OpenAI
  const result_1_1 = await ask_1_1(
    `기분전환이 필요한 우울한 친구한테 해보라고 추천할 일 5가지를 마지막을 "해보기"로 끝내면서 말해줘`
  );
  console.log("result_1_1 : ", result_1_1);
  res.send(result_1_1);
});

app.post("/restart_1_2", async (req, res) => {
  // Ask OpenAI
  const result_1_2_full = await ask_1_2(
    `기분전환이 필요한 우울한 친구한테 들려줄 "가수 노래제목" 형식으로 하나만 알려줘`
  );
  const result_1_2_href =
    "https://www.youtube.com/results?search_query=" +
    result_1_2_full.split("-")[1];
  const result_1_2 = [result_1_2_full, result_1_2_href];
  console.log("result_1_2 : ", result_1_2);
  res.send(result_1_2);
});

app.post("/restart_1_3", async (req, res) => {
  const latitude = req.body.latitude;
  console.log("latitude : ", latitude);
  const longitude = req.body.longitude;
  console.log("longitude : ", longitude);
  // Ask OpenAI
  const result_1_3 = await ask_1_3(
    `When latitude is ${latitude} and longitude is ${longitude}, tell me 5 famous tourist attractions nearby`
  );
  const result_1_3_t = await ask_1_4(result_1_3);
  res.send(result_1_3_t);
});

app.listen(8080, () => {
  console.log("Server started on port 3000");
});