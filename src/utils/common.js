import { languages } from "../i18n/languages";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "./constants";
import client from "./gemini";

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

export const fetchRecommendations = async (query) => {
  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
            You are a movie recommendation engine.
            
            Based on the following user query:
            
            "${query}"
            
            Recommend exactly 10 movies.
            
            Rules:
            - Return ONLY a comma-separated list of movie titles.
            - One title per line.
            - No numbering.
            - No explanations.
            - No markdown.
            - No extra text.`,
    });

    const movies = response.text.split(",").map((movie) => movie.trim());
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
