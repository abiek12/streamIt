import { useSelector } from "react-redux";
import MovieList from "./MoiveList";
import { movieCategoryTitles } from "../utils/common";

const MovieListSection = () => {
  const movies = useSelector((store) => store.movie);

  return (
    <ul className="pl-12 md:pl-24 lg:pl-36 flex flex-col gap-12">
      {Object.entries(movies).map(([key, value]) => (
        <li key={key}>
          <MovieList title={movieCategoryTitles(key)} movies={value} />
        </li>
      ))}
    </ul>
  );
};

export default MovieListSection;
