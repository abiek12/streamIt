import { useTranslation } from "react-i18next";
import { useRef } from "react";
import client from "../utils/gemini";

const GptSearchBar = () => {
  const { t } = useTranslation();
  const searchText = useRef(null);

  const handleGptSeach = async () => {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        You are an expert movie recommendation system.

        Analyze:
        - Genre
        - Mood
        - Theme
        - Era
        - Audience preference

        Recommend exactly 10 movies based on ${searchText.current.value}.

        Return ONLY JSON:

        {
          "recommendations": [
            {
              "title": "Movie Name",
              "year": 2023,
              "genre": "Sci-Fi",
              "reason": "Why this movie matches"
            }
          ]
        }
        `,
    });
    const text = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const data = JSON.parse(text);
    console.log("recommendations:", data);
  };

  return (
    <div className="w-full">
      <form
        action=""
        method="post"
        className="flex flex-col md:flex-row w-full gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="outline-none w-full px-4 py-3 bg-surface"
          placeholder={t("gptSearch.placeholder")}
          type="text"
          name=""
          id=""
        />
        <button
          type="submit"
          className="px-4 py-2 text-white font-medium cursor-pointer bg-primary hover:bg-primary-hover"
          onClick={handleGptSeach}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
