import { OpenAI } from "openai/client.js";
import { OPEN_API_KEY } from "./constants";

const client = new OpenAI({
  apiKey: OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
});

const invokeGPT = async (userInput) => {
  try {
    const response = await client.responses.create({
      model: "gpt-5.4-mini",
      instructions:
        "Hey GPT, you are a movie recommendation engine. When a user describes a movie, vibe, emotion, or genre, you will recommend 5 movies that match the description. For each movie, provide the title and a brief description.",
      input: userInput,
    });

    console.log("GPT Response:", response);
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error invoking GPT:", error);
  }
};

export default invokeGPT;
