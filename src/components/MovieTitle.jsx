import { InfoIcon, PlayIcon } from "@phosphor-icons/react";
import { TMDB_CDN_URL, TMDB_IMAGE_SIZES } from "../utils/constants";

const MovieTitle = (data) => {
  const { movie, movieLogo } = data;
  const logoUrl = `${TMDB_CDN_URL}/${TMDB_IMAGE_SIZES.POSTER.XLARGE}/${movieLogo?.file_path}`;
  return (
    <div className="px-36 absolute top-3/12 flex flex-col gap-8 w-4xl z-10">
      <div className="logo">
        <img src={logoUrl} alt="Movie title logo" />
      </div>
      <div className="desc text-white">{movie?.overview}</div>
      <div className="flex gap-4">
        <div className="play px-6 py-2 bg-white flex gap-2 justify-center items-center rounded-sm cursor-pointer">
          <PlayIcon size={24} weight="fill" />
          <p>Play</p>
        </div>
        <div className="px-6 py-2 flex gap-2 justify-center items-center rounded-sm cursor-pointer bg-text-muted/40 text-white">
          <InfoIcon size={24} color="#ffffff" weight="thin" />
          <p>More Info</p>
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;
