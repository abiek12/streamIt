import { useSelector } from "react-redux";
import MovieList from "./MoiveList";

const MovieListSection = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default MovieListSection;
