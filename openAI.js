const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function ask_1_1(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_tokens: 200,
    top_p: 1,
  });
  const data = completion.data;
  return data.choices[0].text;
}
async function ask_1_2(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.5,
    max_tokens: 50,
    top_p: 1,
  });
  const data = completion.data;
  return data.choices[0].text;
}
async function ask_1_3(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.65,
    max_tokens: 200,
    top_p: 1,
  });
  const data = completion.data;
  return data.choices[0].text;
}
async function ask_1_4(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Translate this into korean:\n\n${message}\n\n`,
    temperature: 0.3,
    max_tokens: 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const data = completion.data;
  return data.choices[0].text;
}

module.exports = { ask_1_1, ask_1_2, ask_1_3, ask_1_4 };