import { useEffect } from "react";
import client from "../utils/gemini";

const useGptRecommendations = (query) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchRecommendations = async () => {
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
        setRecommendedMovies(movies);
      } catch (error) {
        console.error("Error fetching GPT recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [query]);

  return recommendedMovies;
};

export default useGptRecommendations;
