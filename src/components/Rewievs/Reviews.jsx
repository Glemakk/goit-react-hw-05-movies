import { useState, useEffect } from 'react'
import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
const API_KEY = '0558fb418099b1d6ef291e53504aa0aa'

export const fetchReviewsById = async ({ movieId }) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  )
  const movieDetails = await response.data
  // console.log(movieDetails)
  return movieDetails
}

const Reviews = ({ movieId }) => {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetchID()
    return () => {
      setMovie(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchID = async () => {
    try {
      const movieById = await fetchReviewsById({ movieId })
      setMovie(movieById)
    } catch (error) {
      console.log('Ошибка')
    }
  }

  return (
    <>
      <ul>
        {movie ? (
          movie.results.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <hr />
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p> Sorry, we don't have any reviews for this movie</p>
        )}
      </ul>
    </>
  )
}
export default Reviews
