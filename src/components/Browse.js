
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRated'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {
useNowPlayingMovies();
useTopRatedMovies();
 usePopularMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
     <SecondaryContainer/>
{/* 
     MainContainer
      -videoBackground
      -video title
    SecondaryContainer
     -MoviesList * n
      -cards * n

*/}

    </div>
  )
}

export default Browse