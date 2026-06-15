import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../stores/movieSllice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);

  const fetchTopRatedMovies = async () => {
    try {
      const res = await fetch(
        `${TMDB_BASE_URL}/movie/top_rated?page=1`,
        TMDB_API_OPTIONS
      );
      const jsonData = await res.json();

      dispatch(addTopRatedMovies(jsonData.results));
    } catch (error) {
      console.log("Error while fetch top rated movies:", error);
    }
  };

  useEffect(() => {
    if (!topRatedMovies) fetchTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
