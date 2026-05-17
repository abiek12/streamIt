import { useSelector } from "react-redux";
import BackgroundTrailer from "./BackgroundTrailer";
import MovieTitle from "./MovieTitle";
import useMovieLogo from "../hooks/useMovieLogo";

const HeroSection = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  const heroMovie = nowPlayingMovies?.[0];

  const { logo } = useMovieLogo(heroMovie?.id);

  if (!heroMovie) return null;

  console.log("Now Playing Movie:", heroMovie);
  console.log("Backdrop Images:", logo);

  return (
    <div>
      <MovieTitle movie={nowPlayingMovie} />
      <BackgroundTrailer movieId={nowPlayingMovie?.id} />
    </div>
  );
};

export default HeroSection;
