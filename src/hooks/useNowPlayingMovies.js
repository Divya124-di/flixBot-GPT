import { useDispatch } from "react-redux";
import { TMDB_API } from "../utils/constants";
import { useEffect } from "react";
import { addPlayingMovies } from "../utils/moviesSlice";
const useNowPlayingMovies =()=>{
  //fetch the data from TMDB Api and update the store

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_API
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}



export default  useNowPlayingMovies;