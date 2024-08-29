import React from 'react'
import VideoBackGround from './VideoBackGround'
import VideoTitles from './VideoTitles'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return null;
  const MainMovie = movies[0];
  console.log(MainMovie);

  const {original_title, overview, id} = MainMovie;
  
  return (
    <div>
      <VideoTitles title={original_title} overview={overview}/>
      <VideoBackGround movieId={id}/>
    </div>
  );
}

export default MainContainer