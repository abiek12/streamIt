import { useState } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "../components/HeroSection";
import MovieList from "../components/MoiveList";

const Browse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useNowPlayingMovies();

  return (
    <div className="Browse">
      <Header authState={isAuthenticated} />
      <HeroSection />
      <MovieList />
    </div>
  );
};

export default Browse;
