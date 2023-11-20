import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();



  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        MainCOntainer
          - Video Background
          - Video Title
        SecondaryContainer
          - Movie List * N
          - cards*n 
       */}
    </div>
  )
}

export default Browse;
