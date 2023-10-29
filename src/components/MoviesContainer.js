import useGetMovies from "../hooks/useGetMovies"
import MoviesCategory from "./MoviesCategory"

function MoviesContainer() {
  //get movies from custom hooks
  const [nowPlayingMovies, popularMovies, topRatedMovies, upCommingMovies] = useGetMovies();

  return (
    <div className="relative bg-black">
        <MoviesCategory category={'Now Playing'} moviesArray={nowPlayingMovies?.results} />

        <div className="mt-24"></div>
        <MoviesCategory category={'Popular'} moviesArray={popularMovies?.results} />

        <div className="mt-24"></div>
        <MoviesCategory category={'Top Rated'} moviesArray={topRatedMovies?.results} />

        <div className="mt-24"></div>
        <MoviesCategory category={'UpComming'} moviesArray={upCommingMovies?.results} />
    </div>
  )
}

export default MoviesContainer