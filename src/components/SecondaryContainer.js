import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const Movies = useSelector((store) => store.movies);
  console.log(Movies);

  return (
    Movies?.nowPlayingMovies &&
    Movies?.popularMovies &&
    Movies?.topRated && (
      <div className="bg-black">
        <div className="-mt-56 relative z-20">
          <MovieList title={"Now Playing"} movies={Movies?.nowPlayingMovies} />
          <MovieList title={"popular"} movies={Movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={Movies?.topRated} />
          <MovieList title={"Horror"} movies={Movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
