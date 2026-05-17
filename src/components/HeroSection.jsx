import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BackgroundTrailer from "./BackgroundTrailer";
import MovieTitle from "./MovieTitle";

import { TMDB_API_OPTIONS, TMDB_BASE_URL } from "../utils/constants";

const HeroSection = () => {
  const [movieImages, setMovieImages] = useState([]);

  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );

  const nowPlayingMovie = nowPlayingMovies?.[0];

  useEffect(() => {
    if (!nowPlayingMovie?.id) return;

    const fetchMovieImages = async () => {
      try {
        const res = await fetch(
          `${TMDB_BASE_URL}/movie/${nowPlayingMovie.id}/images?include_image_language=en-US,null`,
          TMDB_API_OPTIONS
        );

        const jsonData = await res.json();

        setMovieImages(jsonData?.logos || []);
      } catch (error) {
        console.log("Error while fetching movie images:", error);
      }
    };

    fetchMovieImages();
  }, [nowPlayingMovie]);

  if (!nowPlayingMovies) return null;

  console.log("Now Playing Movie:", nowPlayingMovie);
  console.log("Backdrop Images:", movieImages);

  return (
    <div>
      <MovieTitle movie={nowPlayingMovie} />
      <BackgroundTrailer movieId={nowPlayingMovie?.id} />
    </div>
  );
};

export default HeroSection;
