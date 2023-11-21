import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  return (
    movies && (
    <div className=" bg-black  ">
      <div className="-mt-52 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.NowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
