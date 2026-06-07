// HeroSection.jsx

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

  if (!heroMovie) return null;

  return (
    <section className="relative min-h-screen pb-20 overflow-hidden bg-black">
      <BackgroundTrailer videoKey={videoKey} />

      {/* Left cinematic overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent z-10" />

      {/* Top overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 z-10" />

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-linear-to-t from-black to-transparent z-10" />

      <MovieTitle movie={heroMovie} movieLogo={logo} />
    </section>
  );
};

export default HeroSection;
