import useGetMovies from "../hooks/useGetMovies"
import MoviesCategory from "./MoviesCategory"

function MoviesContainer() {
  //get movies from custom hooks
  const [nowPlayingMovies, popularMovies, topRatedMovies, upCommingMovies] = useGetMovies();

  return (
    <div className="relative bg-black pb-16 pt-8  space-y-12">
        <MoviesCategory category={'Now Playing'} moviesArray={nowPlayingMovies?.results} />
        <MoviesCategory category={'Popular'} moviesArray={popularMovies?.results} />
        <MoviesCategory category={'Top Rated'} moviesArray={topRatedMovies?.results} />
        <MoviesCategory category={'Upcoming'} moviesArray={upCommingMovies?.results} />
    </div>
  )
}

export default MoviesContainer