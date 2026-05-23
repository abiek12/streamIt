import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    try {
      const res = await fetch(
        `${TMDB_BASE_URL}/movie/now_playing?page=1`,
        TMDB_API_OPTIONS
      );
      const jsonData = await res.json();

      dispatch(addNowPlayingMovies(jsonData.results));
    } catch (error) {
      console.log("Error while fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
