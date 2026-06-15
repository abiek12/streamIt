import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../stores/movieSllice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie?.popularMovies);

  const fetchPopularMovies = async () => {
    try {
      const res = await fetch(
        `${TMDB_BASE_URL}/movie/popular?page=1`,
        TMDB_API_OPTIONS
      );
      const jsonData = await res.json();

      dispatch(addNowPlayingMovies(jsonData.results));
    } catch (error) {
      console.log("Error while fetch popular movies:", error);
    }
  };

  useEffect(() => {
    if (!popularMovies) fetchPopularMovies();
  }, []);
};

export default usePopularMovies;
