import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import useLatestShow from '../CustomHooks/useLatestShow';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useLatestShow();



  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
     
    </div>
  )
}

export default Browse;
