import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";

const useMovieLogo = (movieId) => {
  const [logo, setLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieLogo = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${TMDB_BASE_URL}/movie/${movieId}/images?include_image_language=en-US,null`,
          TMDB_API_OPTIONS
        );
        const jsonData = await res.json();
        const movieLogo = jsonData?.logos?.find(
          (logo) => logo.iso_639_1 === "en" && logo.iso_3166_1 === "US"
        );

        setLogo(movieLogo || null);
      } catch (error) {
        setError(error);
        console.log("Error fetching movie logo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieLogo();
  }, [movieId]);

  return { logo, loading, error };
};

export default useMovieLogo;
