import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-36 md:w-48 hover:scale-110 transition-all duration-300 ">
      <img src={IMG_CDN_URL + posterPath} alt="MOvie Card" />
    </div>
  )
}

export default MovieCard
