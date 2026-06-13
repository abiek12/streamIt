import { useState } from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "../components/HeroSection";
import MovieListSection from "../components/MovieListSection";
import Footer from "../components/Footer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "../components/GptSearch";

const Browse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isGptSearch, setIsGptSearch] = useState(false);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  const toggleScreen = () => {
    setIsGptSearch(!isGptSearch);
  };

  return (
    <div className="Browse">
      <Header
        authState={isAuthenticated}
        gptSearchValue={isGptSearch}
        gptSearchToggle={toggleScreen}
      />
      {isGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <HeroSection />
          <div className="relative z-20 -mt-78 mb-12">
            <MovieListSection />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Browse;
