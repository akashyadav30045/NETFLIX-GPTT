import React from 'react'
import { useDispatch } from 'react-redux';
import { addLatestMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
import { API_Options } from '../utils/constants';


const useLatestShow = () => {
    const dispatch = useDispatch();
    const getLatestMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/latest',
      API_Options)
      const json = await data.json()

      dispatch(addLatestMovies(json.results));
    };
    useEffect( () => {
      getLatestMovies();
    },[]);
}

export default useLatestShow
