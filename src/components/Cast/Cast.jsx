import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '0558fb418099b1d6ef291e53504aa0aa'

export const fetchCastsById = async ({ movieId }) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  )
  const movieDetails = await response.data
  // console.log(movieDetails)
  return movieDetails
}

const Cast = ({ movieId }) => {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    console.log('movie in useEffect >>', movie)
    console.log(movieId)

    fetchID()
    console.log('movie in useEffect 2 >>', movie)
    return () => {
      setMovie(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const x = () => {
  //   return movie.cast.map(({ id, name }) => <li key={id}>{name}</li>)
  // }
  console.log(movie)
  const fetchID = async () => {
    try {
      const movieById = await fetchCastsById({ movieId })
      setMovie(movieById)
    } catch (error) {
      console.log('Ошибка')
    }
  }

  return (
    <>
      <ul>
        {movie &&
          movie.cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
              ></img>
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
      </ul>
    </>
  )
}
export default Cast
