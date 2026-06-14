import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { fetchMovieList, fetchRecommendations } from "../utils/common";
import { useDispatch } from "react-redux";
import {
  addRecommendedMovies,
  clearRecommendedMovies,
} from "../stores/gptRecommendedSlice";
import { popupNotification, TOAST_TYPE } from "../utils/toastPopups";
import { useForm } from "react-hook-form";
import { searchSchema } from "../utils/validate";
import { zodResolver } from "@hookform/resolvers/zod";

const GptSearchBar = ({ loading, setLoading, error, setError }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: zodResolver(searchSchema), mode: "onBlur" });

  const handleGptSeach = async (data) => {
    try {
      // Set loading
      setLoading(true);

      // Clear store
      dispatch(clearRecommendedMovies());

      // GPT CALL
      const recommendedMovies = await fetchRecommendations(data.searchText);

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
      popupNotification(
        TOAST_TYPE.ERROR,
        "An error occurred while fetching recommendations."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        action=""
        method="post"
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col md:flex-row w-full gap-4">
          <input
            className="outline-none w-full px-4 py-3 bg-surface"
            placeholder={t("gptSearch.placeholder")}
            type="text"
            name="GPT Search"
            id=""
            {...register("searchText")}
          />
          <button
            type="submit"
            className="px-4 py-2 text-white font-medium cursor-pointer bg-primary hover:bg-primary-hover"
            onClick={handleSubmit(handleGptSeach)}
          >
            Search
          </button>
        </div>
        {errors.searchText && (
          <p className="text-red-600 text-sm">{errors.searchText.message}</p>
        )}
      </form>
    </div>
  );
};

export default GptSearchBar;
