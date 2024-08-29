import { useDispatch } from "react-redux";
import { addTrailerMovies } from "../utils/moviesSlice";
import { TMDB_API } from "../utils/constants";
import { useEffect } from "react";
const useTrailerMovie = ({movieId})=>{

const dispatch = useDispatch();

// const [trailerid, settrailerid] = useState();
const getMovieVideos = async () => {
  const movideData = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
    TMDB_API
  );
  const json = await movideData.json();
  //console.log(json);
  const filterData = json.results.filter((video) => video.type === "Trailer");
  const trailer = filterData.length ? filterData[0] : json.results[0];
  console.log(trailer);
  // settrailerid(trailer);

  dispatch(addTrailerMovies(trailer));
};

useEffect(() => {
  getMovieVideos();
}, []);

}


export  default useTrailerMovie;
