const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const contenidos = require("../helpers/content");
const generator = {};

// Set up your OpenAI API credentials
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function askMeAnything(subject, pregunta) {
  const prompt = `En base exclusivamente a la información que te voy a proporcionar, responda la siguiente pregunta: ${pregunta}.
  Información:
  "${contenidos[subject]}"`;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 150,
  });
  return response.data.choices[0].text.trim();
}

generator.askMeAnything = askMeAnything;

module.exports = generator;
