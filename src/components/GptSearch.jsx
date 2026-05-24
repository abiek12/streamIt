import GptSearchBar from "./GptSearchBar";
import GptSearchResults from "./GptSearchResults";

const GptSearch = () => {
  return (
    <div>
      <div className="relative min-h-screen pb-20 overflow-hidden bg-black my-36 px-36 text-white flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Search your queries</h1>
        <GptSearchBar />
      </div>
      <GptSearchResults />
    </div>
  );
};

export default GptSearch;
