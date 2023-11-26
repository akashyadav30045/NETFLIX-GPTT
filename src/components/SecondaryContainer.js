import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)
  return (
    movies && (
    <div className=" bg-black  ">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Horror"} movies={movies.NowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.NowPlayingMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer
