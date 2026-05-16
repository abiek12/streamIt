import Header from "../components/Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="Browse">
      <Header authState={isAuthenticated} />
    </div>
  );
};

export default Browse;
