import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { fetchMovieList, fetchRecommendations } from "../utils/common";
import { useDispatch } from "react-redux";
import {
  addRecommendedMovies,
  clearRecommendedMovies,
} from "../stores/gptRecommendedSlice";
import { popupNotification, TOAST_TYPE } from "../utils/toastPopups";

const GptSearchBar = ({ loading, setLoading, error, setError }) => {
  const { t } = useTranslation();
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSeach = async () => {
    try {
      // Set loading
      setLoading(true);

      // Clear store
      dispatch(clearRecommendedMovies());

      // GPT CALL
      const recommendedMovies = await fetchRecommendations(
        searchText.current.value
      );

      // TMDB CALL
      const tmdbMovies = recommendedMovies.map((i) => fetchMovieList(i));
      const moviesList = await Promise.all(tmdbMovies);

      // Update store with recommended movies and their details
      dispatch(
        addRecommendedMovies({
          gptRecommendedMovies: recommendedMovies,
          recommendedMoviesResults: moviesList,
        })
      );
    } catch (error) {
      setError(error);
      popupNotification(TOAST_TYPE.ERROR, "Error while searching movies!");
    } finally {
      setLoading(false);
    }
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
