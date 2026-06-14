import { languages } from "../i18n/languages";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "./constants";
import invokeGPT from "./openai";

export const movieCategoryTitles = (key) => {
  switch (key) {
    case "nowPlayingMovies":
      return "Now Playing";

    case "popularMovies":
      return "Popular";

    case "topRatedMovies":
      return "Top Rated";

    case "upComingMovies":
      return "Upcoming";

    default:
      return "Other";
  }
};

export const returnLangLabel = (code) => {
  return languages.filter((i) => i.code === code).map((i) => i.label);
};

export const fetchRecommendations = async (userInput) => {
  try {
    const query = `
      You are a movie recommendation engine.

      User request:
      "${userInput}"

      Return exactly 10 movie titles that best match the user's intent.

      Requirements:
      - Prefer popular, highly-rated, relevant movies.
      - Avoid duplicate titles.
      - Return only a JSON array of strings.
      - Exactly 10 items.`;

    // const geminiRes = await invokeGemini(query, userInput);
    const gptRes = await invokeGPT(query, userInput);
    const movies = JSON.parse(gptRes.output_text);

    return movies;
  } catch (error) {
    console.error("Error fetching GPT recommendations:", error);
  }
};

export const fetchMovieList = async (searchQuery) => {
  try {
    const res = await fetch(
      `${TMDB_BASE_URL}/search/movie?query=${searchQuery}`,
      TMDB_API_OPTIONS
    );

    const jsonData = await res.json();
    return jsonData.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
  }
};
