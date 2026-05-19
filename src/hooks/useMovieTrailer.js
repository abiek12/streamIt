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
        const filteredData = jsonData?.results.filter(
          (i) => i.type === "Trailer"
        );

        const finalData =
          filteredData.length > 0 ? filteredData[0] : jsonData?.results[0];

        setVideoKey(finalData?.key);
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
