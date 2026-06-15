import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../stores/movieSllice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );

  const fetchNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        `${TMDB_BASE_URL}/movie/now_playing?page=1`,
        TMDB_API_OPTIONS
      );
      const jsonData = await res.json();

      dispatch(addPopularMovies(jsonData.results));
    } catch (error) {
      console.log("Error while fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies) fetchNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
