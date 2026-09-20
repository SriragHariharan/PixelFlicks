# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Pix — a Netflix-inspired React movie browsing app. Users sign in via
Firebase auth, browse TMDB-sourced movies/shows, and can search using an
OpenAI GPT-powered natural language search. Bootstrapped with Create React
App (`react-scripts`).

## Tech stack

- React 18, react-router-dom v6
- Redux Toolkit + react-redux for state
- Firebase v10 for authentication
- TMDB API for movie/show data
- OpenAI API (GPT) for natural language movie search
- Tailwind CSS for styling
- react-hook-form for forms

## Folder layout

- `src/components` — UI components (Navbar, Footer, MovieCard, Faq, Auth, etc.)
- `src/pages` — route-level pages (`Browse.js`, `MovieDetails.js`, `Search.js`)
- `src/hooks` — custom hooks for fetching movies, cast, videos, posters
- `src/redux-toolkit` — `store.js` and reducers (`searchedMovieReducer.js`, `userReducer.js`)
- `src/utils` — `RootLayout.js`, `firebase.js`, `openai.js`, `constants.js`
- `src/assets` — local images and video used in the UI

## Env vars

A `.env` file at the project root must define:
- `REACT_APP_OPENAI_SECRET_KEY`
- `REACT_APP_TMDB_AUTH_TOKEN`

## Scripts

- `npm start` — run the dev server
- `npm run build` — production build
- `npm test` — CRA test runner (no separate lint/format script is configured)

## Styling conventions

Tailwind theme colors are defined in `tailwind.config.js` under
`theme.extend.colors.brand` (e.g. `brand.red`) — use these instead of
hardcoding one-off Tailwind color utilities like `red-600` for the primary
accent color. Backgrounds/surfaces use Tailwind's default `black`/`neutral`
scale. Font Awesome (loaded via CDN in `public/index.html`) is available
globally for icons — no import needed. The "Pix" wordmark (`Logo.js`) uses
the `font-pix` Tailwind class (Bungee, imported in `index.css`) — keep that
font reserved for the logo/wordmark rather than reusing it for body text.
