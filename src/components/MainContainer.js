import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { original } from '@reduxjs/toolkit'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
    console.log(movies)

  if (!movies) return;
  const mainMovie = movies[1];
  console.log(mainMovie);

  const {original_title,overview} = mainMovie;

    
  return (
    <div>
      Main COntainer
      <VideoTitle title={original_title} overview={overview}  />
      <VideoBackground/>
    </div>
  )

}

export default MainContainer
