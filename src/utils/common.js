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
