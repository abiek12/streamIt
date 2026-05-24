const GptSearchBar = () => {
  return (
    <div className="w-full">
      <form
        action=""
        method="post"
        className="flex flex-col md:flex-row w-full gap-4"
      >
        <input
          className="outline-none w-full px-4 py-3 bg-surface"
          placeholder="Describe a movie, vibe, emotion, or genre..."
          type="text"
          name=""
          id=""
        />
        <button
          type="submit"
          className="px-4 py-2 text-white font-medium cursor-pointer bg-primary hover:bg-primary-hover"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
