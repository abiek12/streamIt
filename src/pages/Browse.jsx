import { useEffect, useState } from "react";
import Header from "../components/Header";
import { TMDB_API_OPTIONS, TMDB_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../stores/movieSllice";

const Browse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const dispatch = useDispatch();

  const fetchNowPlayingMovies = async () => {
    try {
      const res = await fetch(TMDB_URL, TMDB_API_OPTIONS);
      const jsonData = await res.json();

      console.log("jsonData:", jsonData);
      dispatch(addNowPlayingMovies(jsonData.results));
    } catch (error) {
      console.log("Error while fetch now playing movies:", error);
    }
  };

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  return (
    <div className="Browse">
      <Header authState={isAuthenticated} />
    </div>
  );
};

export default Browse;
