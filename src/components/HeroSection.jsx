import { useSelector } from "react-redux";
import BackgroundTrailer from "./BackgroundTrailer";
import MovieTitle from "./MovieTitle";
import useMovieLogo from "../hooks/useMovieLogo";
import useMovieTrailer from "../hooks/useMovieTrailer";

const HeroSection = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  const heroMovie = nowPlayingMovies?.[0];

  const { logo } = useMovieLogo(heroMovie?.id);
  const { videoKey } = useMovieTrailer(heroMovie?.id);

  console.log("key:", videoKey);

  if (!heroMovie) return null;

  return (
    <div className="relative h-dvh">
      <MovieTitle movie={heroMovie} movieLogo={logo} />
      <BackgroundTrailer videoKey={videoKey} />
    </div>
  );
};

export default HeroSection;
