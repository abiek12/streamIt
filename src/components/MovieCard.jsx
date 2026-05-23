import { TMDB_CDN_URL, TMDB_IMAGE_SIZES } from "../utils/constants";

const MovieCard = ({ title, posterUrl }) => {
  return (
    <div>
      <div className="">
        <img
          src={`${TMDB_CDN_URL}/${TMDB_IMAGE_SIZES.POSTER.SMALL}/${posterUrl}`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default MovieCard;
