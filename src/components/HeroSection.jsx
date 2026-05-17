import { useSelector } from "react-redux";
import BackgroundTrailer from "./BackgroundTrailer";
import MovieTitle from "./MovieTitle";

const HeroSection = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if (!nowPlayingMovies) return;

  console.log("Now playing movies:", nowPlayingMovies[0]);
  return (
    <div>
      <h1>Hero section</h1>
      <MovieTitle />
      <BackgroundTrailer />
    </div>
  );
};

export default HeroSection;
