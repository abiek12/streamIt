import MovieList from "./MoiveList";

const GptSearchResults = ({ recommendedMovies, movieTitles }) => {
  if (!recommendedMovies || !movieTitles) return null;
  return (
    <div>
      <h1>Search results</h1>
      <MovieList title={movieTitles[0]} movies={recommendedMovies[0]} />
    </div>
  );
};

export default GptSearchResults;
