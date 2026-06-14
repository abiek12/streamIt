import { useTranslation } from "react-i18next";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const { t } = useTranslation();
  const { gptRecommendedMovies, recommendedMoviesResults } = useSelector(
    (store) => store.gptRecommendedMovies
  );

  return (
    <div className="flex flex-col gap-14">
      <div className="relative overflow-hidden bg-black mt-36 px-36 text-white flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{t("gptSearch.title")}</h1>
        <GptSearchBar />
      </div>
      <div className="px-36">
        {gptRecommendedMovies && recommendedMoviesResults ? (
          <GptSearchResults
            recommendedMovies={recommendedMoviesResults}
            movieTitles={gptRecommendedMovies.map((i) => i.title)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default GptSearch;
