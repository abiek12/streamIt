import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="flex flex-col">
      <div className="">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
      </div>
      <div>
        <ul className="flex gap-4 w-full overflow-x-auto overflow-y-hidden no-scrollbar py-4">
          {movies &&
            movies.map((i) => (
              <li
                key={i.id}
                className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-110"
              >
                <MovieCard
                  key={i.id}
                  title={i?.title || i?.original_title}
                  posterUrl={i?.poster_path}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
