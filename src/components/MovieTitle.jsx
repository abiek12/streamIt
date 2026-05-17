import { TMDB_CDN_URL, TMDB_IMAGE_SIZES } from "../utils/constants";

const MovieTitle = (data) => {
  const { movie, movieLogo } = data;
  const logoUrl = `${TMDB_CDN_URL}/${TMDB_IMAGE_SIZES.POSTER.XLARGE}/${movieLogo?.file_path}`;
  return (
    <div className="">
      <div className="logo">
        <img src={logoUrl} alt="Movie title logo" />
      </div>
      <div className="desc text-white">{movie?.overview}</div>
      <div className="">
        <div className="play p-2 bg-white">
          <p>Play</p>
        </div>
        <div className="bg-text-muted opacity-50 text-white">
          <p>More Info</p>
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;
