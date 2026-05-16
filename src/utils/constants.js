export const CDN_URL = "https://occ-0-4994-3662.1.nflxso.net/dnm/api/v6";

export const TMDB_URL = "https://api.themoviedb.org/3/authentication";
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.TMDB_ACCESS_TOKEN}`,
  },
};
