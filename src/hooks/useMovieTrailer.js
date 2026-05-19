import { useEffect, useState } from "react";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieVideos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${TMDB_BASE_URL}/movie/${movieId}/videos?include_image_language=en-US,null`,
          TMDB_API_OPTIONS
        );
        const jsonData = await res.json();
        const finalData = jsonData?.results.map((i) => i.type === "trailer");

        console.log("finalkey:", finalData);

        setVideoKey(finalData);
      } catch (error) {
        setError(error);
        console.log("Error fetching movie logo:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieVideos();
  }, [movieId]);

  return { videoKey, loading, error };
};

export default useMovieTrailer;
