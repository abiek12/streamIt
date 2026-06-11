import { useTranslation } from "react-i18next";
import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const { t } = useTranslation();
  const movies = useSelector((store) => store.movie);

  console.log("movies:", movies);

  return (
    <div>
      <div className="relative min-h-screen pb-20 overflow-hidden bg-black my-36 px-36 text-white flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">{t("gptSearch.title")}</h1>
        <GptSearchBar />
      </div>
      <GptSearchResults />
    </div>
  );
};

export default GptSearch;
