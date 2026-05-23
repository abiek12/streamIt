import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../stores/movieSllice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const fetchUpComingMovies = async () => {
    try {
      const res = await fetch(
        `${TMDB_BASE_URL}/movie/upcoming?page=1`,
        TMDB_API_OPTIONS
      );
      const jsonData = await res.json();

      dispatch(addUpComingMovies(jsonData.results));
    } catch (error) {
      console.log("Error while fetch upcoming movies:", error);
    }
  };

  useEffect(() => {
    fetchUpComingMovies();
  }, []);
};

export default useUpComingMovies;
