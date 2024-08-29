import { useDispatch } from "react-redux";
import { TMDB_API } from "../utils/constants";
import { useEffect } from "react";
import {  addTopRatedMovies } from "../utils/moviesSlice";
const useTopRatedMovies = () => {
  //fetch the data from TMDB Api and update the store

  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_API
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useTopRatedMovies;
