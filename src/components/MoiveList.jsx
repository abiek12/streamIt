import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <div className="text-white">
        <h1>{title}</h1>
      </div>
      <div>
        {movies.map((i) => (
          <div key={i.id} className="">
            <MovieCard
              title={i?.title || i?.original_title}
              posterUrl={i?.poster_path}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
