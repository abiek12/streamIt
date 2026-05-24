const GptSearchBar = () => {
  return (
    <div className="w-full">
      <form action="" method="post" className="flex gap-4 items-center w-full">
        <input
          className="border border-solid border-white px-4 py-2"
          placeholder="Search your queries"
          type="text"
          name=""
          id=""
        />
        <button
          type="submit"
          className="px-4 py-2 border border-solid border-white cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
