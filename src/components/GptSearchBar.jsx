import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { fetchMovieList, fetchRecommendations } from "../utils/common";
import { useDispatch } from "react-redux";
import { addRecommendedMovies } from "../stores/gptRecommendedSlice";

const GptSearchBar = () => {
  const { t } = useTranslation();
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSeach = async () => {
    // GPT CALL
    const recommendedMovies = await fetchRecommendations(
      searchText.current.value
    );
    console.log("final recommended movies:", recommendedMovies);

    // TMDB CALL
    const tmdbMovies = recommendedMovies.map((i) => fetchMovieList(i));

    const moviesList = await Promise.all(tmdbMovies);
    dispatch(
      addRecommendedMovies({
        gptRecommendedMovies: recommendedMovieTitles,
        recommendedMoviesResults: moviesList,
      })
    );
  };

  return (
    <div className="w-full">
      <form
        action=""
        method="post"
        className="flex flex-col md:flex-row w-full gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="outline-none w-full px-4 py-3 bg-surface"
          placeholder={t("gptSearch.placeholder")}
          type="text"
          name=""
          id=""
        />
        <button
          type="submit"
          className="px-4 py-2 text-white font-medium cursor-pointer bg-primary hover:bg-primary-hover"
          onClick={handleGptSeach}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
