import { languages } from "../i18n/languages";

export const movieCategoryTitles = (key) => {
  switch (key) {
    case "nowPlayingMovies":
      return "Now Playing";

    case "popularMovies":
      return "Popular";

    case "topRatedMovies":
      return "Top Rated";

    case "upComingMovies":
      return "Upcoming";

    default:
      return "Other";
  }
};

export const returnLangLabel = (code) => {
  return languages.filter((i) => i.code === code).map((i) => i.label);
};
