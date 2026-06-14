import { useTranslation } from "react-i18next";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { useSelector } from "react-redux";
import { useState } from "react";

const GptSearch = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErorr] = useState(null);

  const { gptRecommendedMovies, recommendedMoviesResults } = useSelector(
    (store) => store.gptRecommendedMovies
  );

  return (
    <div className="flex flex-col gap-14">
      <div className="relative overflow-hidden bg-black mt-36 px-36 text-white flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{t("gptSearch.title")}</h1>
        <GptSearchBar
          loading={isLoading}
          setLoading={setIsLoading}
          error={error}
          setError={setErorr}
        />
      </div>
      <div className="px-36">
        {gptRecommendedMovies && recommendedMoviesResults ? (
          <GptSearchResults
            recommendedMovies={recommendedMoviesResults}
            movieTitles={gptRecommendedMovies.map((i) => i.title)}
          />
        ) : isLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center">
            <p className="text-red-500">An error occurred: {error.message}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GptSearch;
