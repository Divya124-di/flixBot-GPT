import React from 'react'
import { poster_CDN } from "../utils/constants";

const MovieCard = ({PosterPath}) => {
  console.log(PosterPath);
  
  return (
    <div className='w-48 mr-2'>
      <img  className="m-2 p-2" src={poster_CDN + PosterPath} alt="poster" />
    </div>
  )
}

export default MovieCard