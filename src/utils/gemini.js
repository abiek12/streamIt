import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

const client = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const invokeGemini = async (query, userInput) => {
  try {
    return await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
    });
  } catch (error) {
    console.error("Error invoking gemini:", error);
  }
};

export default invokeGemini;
