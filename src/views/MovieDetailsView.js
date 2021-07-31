import { useParams, useLocation, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { toast } from 'react-toastify'
import * as movieBundleApi from '../services/movieBundle-api'
import MovieCard from '../components/MovieCard'

const MovieDetailsView = () => {
  const history = useHistory()
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const location = useLocation()

  useEffect(() => {
    fetchID()

    return () => {
      setMovie(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onGoBack = () => {
    // Раньше
    // if(location && location.state && location.state.from){
    //history.push(location.state.from)
    //return
    // } return history.push('/')
    history.push(location?.state?.from ?? '/')
  }

  const fetchID = async () => {
    const movieById = await movieBundleApi.fetchMovieById({ movieId })
    setMovie(movieById)

    // console.log(movieById.status)
    // console.log('movie in fetchId >>', movie)
  }

  // const fetchID = async () => {
  //   const movieById = await movieBundleApi.fetchMovieById({ movieId })
  //   const tvById = await movieBundleApi.fetchTvById({ movieId })
  //   console.log(movieById)
  //   if (movieById.Status.ok) {
  //     setMovie(movieById)
  //   }
  //   setMovie(tvById)

  // console.log('movie', movie)
  // console.log('movieId', movieId)
  // console.log(Request.status)
  // }
  // console.log('movie out of useEffect >>', movie.status_message)
  // movie.genres.map((m) => console.log(m))

  return (
    <>
      {/* <h1>Movie Details {movieId}</h1> */}
      {movie && (
        <button type="button" onClick={onGoBack}>
          {location?.state?.from?.label ?? 'Go Back'}
        </button>
      )}
      {movie && <MovieCard movie={movie} />}

      {/* {!movie
        ? (
        <h1>
          Sorry, description doesn't found. We have terrible backend request!
        </h1>
      ) : (
        <MovieCard movie={movie} />
      )} */}
    </>
  )
}
export default MovieDetailsView

//=======GoBack Button
// const Cast = () => {
//   return <div>CAST PAGE</div>
// }

// const useGoBackToMoviesPage = () => {
//   const routerState = useRef(null)
//   const location = useLocation()
//   const history = useHistory()

//   useEffect(() => {
//     if (!routerState.current) {
//       routerState.current = location.state
//     }
//   }, [])

//   const handleGoBack = () => {
//     const url = routerState.current ? `/?${routerState.current.params}` : '/'
//     history.push(url)
//   }

//   return {
//     goBack: handleGoBack,
//   }
// }

// // /movies/:movieId
// const MovieDetailsPage = () => {
//   const { movieId } = useParams()
//   const { url, path } = useRouteMatch()
//   const { goBack } = useGoBackToMoviesPage()

//   return (
//     <div>
//       <button onClick={goBack}>Назад</button>

//       <div>Movie id: {movieId}</div>
//       <Link to={`${url}/cast`}>Cast</Link>

//       <Switch>
//         <Route path={`${path}/cast`} exact>
//           <Cast />
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// // /movies -> /
// export default function App() {
//   return (
//     <>
//       {/* <Nav /> */}
//       <Link
//         to={{
//           pathname: '/movies/123',
//           state: { params: 'title=batman' },
//         }}
//       >
//         Movie 123
//       </Link>
//       <hr />

//       <Route path="/movies/:movieId">
//         <MovieDetailsPage />
//       </Route>
//     </>
//   )
// }
