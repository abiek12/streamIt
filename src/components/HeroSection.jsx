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

  return (
    <div>
      <MovieTitle movie={heroMovie} movieLogo={logo} />
      <BackgroundTrailer movieId={heroMovie?.id} />
    </div>
  );
};

export default HeroSection;
