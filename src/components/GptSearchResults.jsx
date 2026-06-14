import MovieList from "./MoiveList";

const GptSearchResults = ({ recommendedMovies, movieTitles }) => {
  if (!recommendedMovies || !movieTitles) return null;
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-white">Search results</h1>
      {movieTitles.map((i, idx) =>
        recommendedMovies[idx].length > 0 ? (
          <MovieList title={i} movies={recommendedMovies[idx]} />
        ) : null
      )}
    </div>
  );
};

export default GptSearchResults;
