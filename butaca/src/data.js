// Datos locales de ejemplo (mock). En una versión real vendrían de TMDB + localStorage.

let _id = 0;
const id = () => ++_id;

export const seedLibrary = [
  {
    id: id(), type: "series", title: "Severance", year: 2022, genre: "Sci-Fi · Thriller",
    poster: { from: "#1d4ed8", to: "#0f172a", emoji: "🗂️" },
    status: "watching",
    seasons: [{ eps: 9, watched: 9 }, { eps: 10, watched: 6 }],
  },
  {
    id: id(), type: "series", title: "The Bear", year: 2022, genre: "Drama · Cocina",
    poster: { from: "#b45309", to: "#1c1917", emoji: "🔪" },
    status: "watching",
    seasons: [{ eps: 8, watched: 8 }, { eps: 10, watched: 10 }, { eps: 10, watched: 2 }],
  },
  {
    id: id(), type: "series", title: "Dark", year: 2017, genre: "Sci-Fi · Misterio",
    poster: { from: "#334155", to: "#020617", emoji: "🕳️" },
    status: "watching",
    seasons: [{ eps: 10, watched: 10 }, { eps: 8, watched: 3 }, { eps: 8, watched: 0 }],
  },
  {
    id: id(), type: "movie", title: "Dune: Parte Dos", year: 2024, genre: "Sci-Fi · Aventura", runtime: 166,
    poster: { from: "#d97706", to: "#292524", emoji: "🏜️" },
    status: "watchlist",
  },
  {
    id: id(), type: "movie", title: "La La Land", year: 2016, genre: "Musical · Romance", runtime: 128,
    poster: { from: "#7c3aed", to: "#1e1b4b", emoji: "🎹" },
    status: "watchlist",
  },
  {
    id: id(), type: "movie", title: "Oldboy", year: 2003, genre: "Thriller", runtime: 120,
    poster: { from: "#b91c1c", to: "#1c1917", emoji: "🔨" },
    status: "watchlist",
  },
  {
    id: id(), type: "series", title: "Fleabag", year: 2016, genre: "Comedia · Drama",
    poster: { from: "#be185d", to: "#1f1720", emoji: "🦊" },
    status: "watchlist",
    seasons: [{ eps: 6, watched: 0 }, { eps: 6, watched: 0 }],
  },
  {
    id: id(), type: "series", title: "Chernobyl", year: 2019, genre: "Drama histórico",
    poster: { from: "#65a30d", to: "#111827", emoji: "☢️" },
    status: "watchlist",
    seasons: [{ eps: 5, watched: 0 }],
  },
  {
    id: id(), type: "movie", title: "Parásitos", year: 2019, genre: "Thriller · Drama", runtime: 132,
    poster: { from: "#0d9488", to: "#111827", emoji: "🪨" },
    status: "watched", rating: 5,
  },
  {
    id: id(), type: "movie", title: "Whiplash", year: 2014, genre: "Drama · Música", runtime: 106,
    poster: { from: "#f59e0b", to: "#18181b", emoji: "🥁" },
    status: "watched", rating: 5,
  },
  {
    id: id(), type: "movie", title: "Her", year: 2013, genre: "Romance · Sci-Fi", runtime: 126,
    poster: { from: "#e11d48", to: "#2a1218", emoji: "📱" },
    status: "watched", rating: 4,
  },
  {
    id: id(), type: "series", title: "Succession", year: 2018, genre: "Drama",
    poster: { from: "#475569", to: "#0c0a09", emoji: "🏢" },
    status: "watched", rating: 5,
    seasons: [{ eps: 10, watched: 10 }, { eps: 10, watched: 10 }, { eps: 9, watched: 9 }, { eps: 10, watched: 10 }],
  },
];

// Catálogo para el buscador (lo que "existe ahí fuera")
export const catalog = [
  { type: "series", title: "Andor", year: 2022, genre: "Sci-Fi · Drama", poster: { from: "#0369a1", to: "#0c0a09", emoji: "🛰️" }, seasons: [{ eps: 12, watched: 0 }, { eps: 12, watched: 0 }] },
  { type: "movie", title: "Interstellar", year: 2014, genre: "Sci-Fi", runtime: 169, poster: { from: "#155e75", to: "#020617", emoji: "🌌" } },
  { type: "series", title: "True Detective", year: 2014, genre: "Crimen · Drama", poster: { from: "#a16207", to: "#0c0a09", emoji: "🔦" }, seasons: [{ eps: 8, watched: 0 }, { eps: 8, watched: 0 }, { eps: 8, watched: 0 }, { eps: 6, watched: 0 }] },
  { type: "movie", title: "El Padrino", year: 1972, genre: "Crimen · Drama", runtime: 175, poster: { from: "#7f1d1d", to: "#0c0a09", emoji: "🌹" } },
  { type: "series", title: "Arcane", year: 2021, genre: "Animación · Fantasía", poster: { from: "#4f46e5", to: "#1e1b4b", emoji: "⚗️" }, seasons: [{ eps: 9, watched: 0 }, { eps: 9, watched: 0 }] },
  { type: "movie", title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", runtime: 164, poster: { from: "#ea580c", to: "#1c1917", emoji: "🌆" } },
  { type: "series", title: "Shōgun", year: 2024, genre: "Drama histórico", poster: { from: "#9f1239", to: "#18181b", emoji: "⚔️" }, seasons: [{ eps: 10, watched: 0 }] },
  { type: "movie", title: "Coherence", year: 2013, genre: "Sci-Fi · Misterio", runtime: 89, poster: { from: "#5b21b6", to: "#0f0a1e", emoji: "☄️" } },
];
