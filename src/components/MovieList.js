import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    console.log(movies);
    
  return (
    <div className="p-6">
      <p className="text-white font-bold text-xl">{title}</p>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} PosterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList