import { useParams, useRouteMatch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import * as movieBundleApi from '../services/movieBundle-api'
import MovieCard from '../components/MovieCard'

const MovieDetailsView = () => {
  const { movieId } = useParams()
  // console.log(movieId)

  // const match = useRouteMatch()
  // console.log(match.params)
  const [movie, setMovie] = useState(null)
  // console.log(movie)
  useEffect(() => {
    console.log('movie in useEffect >>', movie)
    console.log(movieId)

    fetchID()
    console.log('movie in useEffect 2 >>', movie)
    return () => {
      setMovie(null)
    }
  }, [])

  const fetchID = async () => {
    // if (!movieById) {
    //   toast.warn(`is already in contacts`)
    // }

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

  console.log(movie)
  // }
  // console.log('movie out of useEffect >>', movie.status_message)
  // movie.genres.map((m) => console.log(m))

  return (
    <>
      <h1>Movie Details {movieId}</h1>
      {!movie ? (
        <h1>
          Sorry, description doesn't found. We have terrible backend request!
        </h1>
      ) : (
        <MovieCard movie={movie} />
      )}
    </>
  )
}
export default MovieDetailsView
