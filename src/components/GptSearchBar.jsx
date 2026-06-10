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
        You are a movie recommendation engine.

        Based on the following user query:

        "${searchText.current.value}"

        Recommend exactly 10 movies.

        Rules:
        - Return ONLY a comma-separated list of movie titles.
        - One title per line.
        - No numbering.
        - No explanations.
        - No markdown.
        - No extra text.
        `,
    });

    const movies = response.text.split(",").map((movie) => movie.trim());

    console.log("movies:", movies);
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
