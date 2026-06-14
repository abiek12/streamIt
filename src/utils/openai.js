import { OpenAI } from "openai/client.js";
import { OPEN_API_KEY } from "./constants";

const client = new OpenAI({
  apiKey: OPEN_API_KEY,
  dangerouslyAllowBrowser: true,
});

const invokeGPT = async (query, userInput) => {
  try {
    return await client.responses.create({
      model: "gpt-5.4-mini",
      instructions: query,
      input: userInput,
    });
  } catch (error) {
    console.error("Error invoking GPT:", error);
  }
};

export default invokeGPT;
