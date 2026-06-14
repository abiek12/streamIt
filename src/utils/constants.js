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

// TMDB IMAGE SIZES
export const TMDB_IMAGE_SIZES = {
  POSTER: {
    SMALL: "w92",
    MEDIUM_SMALL: "w154",
    MEDIUM: "w185",
    LARGE: "w342",
    XLARGE: "w500",
    XXLARGE: "w780",
    ORIGINAL: "original",
  },

  BACKDROP: {
    SMALL: "w300",
    MEDIUM: "w780",
    LARGE: "w1280",
    ORIGINAL: "original",
  },

  PROFILE: {
    SMALL: "w45",
    MEDIUM: "w185",
    LARGE: "h632",
    ORIGINAL: "original",
  },
};

export const LANGUAGES = {
  ENGLISH: "en",
  HINDI: "hi",
};

export const GEMINI_API_KEY = "your_gemini_api_key_here";

export const OPEN_API_KEY = import.meta.env.VITE_OPEN_API_KEY;
