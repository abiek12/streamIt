export const CDN_URL = "https://occ-0-4994-3662.1.nflxso.net/dnm/api/v6";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_CDN_URL = "https://image.tmdb.org/t/p";
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
};
