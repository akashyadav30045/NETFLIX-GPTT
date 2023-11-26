import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import openai from"../utils/openai"
import { API_Options } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null)

  // search movie in TMDB
  const  searchMovieTMDb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async() => {
    console.log(searchText.current.value)
    // make an API call to get the movie results.
    const gptQUery = "Act as a Movie Recommendation System and suggest some movies for the query" +
     searchText.current.value + 
     ".only give me names of 5 movies , comma separated like the example resut given ahead. Example Result : Gadar , Sholay , Don , Golmaal , koi Mil Gaya" ; 


      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQUery }],
        model: 'gpt-3.5-turbo',
      });

      // if (!gptResults.choices) {
      // }

      console.log(gptResults.choices?.[0]?.message?.content.split(","));

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map((movie)=> searchMovieTMDb(movie));
      // [Promise , Promise ,Promise ,PRomise,Promise ]
      const tmdbResults = await Promise.all(promiseArray);

      console.log(tmdbResults)

      // for each movie i wll search TMBD API

      
      dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}))

    };
    
  
  return (
    <div className="pt-[10%] flex justify-center  ">
      <form  className=" bg-black w-1/2  grid grid-cols-12 rounded-lg " onSubmit={(e)=>e.preventDefault()}  >
        <input 
            ref={searchText}
            type="text" 
            className="p-4 m-4 col-span-9 rounded-lg" 
            placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg"
         onClick={handleGptSearchClick}           >
            {lang.hindi.search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
