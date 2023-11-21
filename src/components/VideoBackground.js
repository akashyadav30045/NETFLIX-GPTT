import React, { useEffect } from 'react'
import { API_Options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)
 const dispatch = useDispatch();

  const getMovieVideos = async() => {
            const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos?language=en-US",API_Options);
            const json = await data.json();
            console.log(json);

// fetching trailer
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0] ;
    console.log(trailer);
    dispatch(addTrailerVideo(trailer))
    // if (!trailerVideo) return;
    // const video = trailerVideo.key;

  };
  useEffect(() => {
    getMovieVideos();
  },[]);
  // fetch the trailer video 
  return (
    <div>
      Background
      <iframe
         width="560" 
         height="315"
         src={"https://www.youtube.com/embed/" + trailerVideo?.key } 
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; -media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
  )
}

export default VideoBackground
