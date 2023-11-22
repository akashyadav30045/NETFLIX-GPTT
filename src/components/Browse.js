import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../CustomHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../CustomHooks/usePopularMovies';
import useLatestShow from '../CustomHooks/useLatestShow';
import GptSearch from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useLatestShow();
  
  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>

      }
    </div>
  )
}

export default Browse;
