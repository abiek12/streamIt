import { useState } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "../components/HeroSection";
import MovieListSection from "../components/MovieListSection";

const Browse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useNowPlayingMovies();

  return (
    <div className="Browse">
      <Header authState={isAuthenticated} />
      <HeroSection />
      <MovieListSection />
    </div>
  );
};

export default Browse;
