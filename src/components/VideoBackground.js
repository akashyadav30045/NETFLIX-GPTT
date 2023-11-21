
import {  useSelector } from 'react-redux';
import useMovieTrailer from '../CustomHooks/useMovieTrailer';



const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store)=> store.movies?.trailerVideo)
  useMovieTrailer(movieId);

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