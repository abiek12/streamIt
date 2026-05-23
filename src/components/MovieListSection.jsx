import { useSelector } from "react-redux";
import MovieList from "./MoiveList";

const MovieListSection = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <div className="pl-12 md:pl-24 lg:pl-36 flex flex-col gap-12">
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
    </div>
  );
};

export default MovieListSection;
