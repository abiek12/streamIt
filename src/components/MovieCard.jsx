import { TMDB_CDN_URL, TMDB_IMAGE_SIZES } from "../utils/constants";

const MovieCard = ({ title, posterUrl }) => {
  return (
    <div className="w-44 h-64 rounded-lg overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={`${TMDB_CDN_URL}/${TMDB_IMAGE_SIZES.POSTER.LARGE}/${posterUrl}`}
        alt={title}
      />
    </div>
  );
};

export default MovieCard;
