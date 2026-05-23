import { useState } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "../components/HeroSection";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div className="Browse">
      <Header authState={isAuthenticated} />
      <HeroSection />
      <div className="relative z-20 -mt-78 mb-12">
        <MovieListSection />
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
