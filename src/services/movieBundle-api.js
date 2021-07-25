import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
// const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '0558fb418099b1d6ef291e53504aa0aa'

// async function fetchMoviesWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config)
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Something goes wrong'))
// }
//==================================
// async function fetchMoviesWithErrorHandling() {
//   const fetch = await fetch(`${BASE_URL}`)
//   const response = await fetch(res => res.json())
//   return response
// }

//==========================================
// export const fetchTrending = () => {
//   return fetchMoviesWithErrorHandling(
//     `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
//   )
// }

//------------Фетч по трендам
export const fetchTrending = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`)
  const trends = await data.results
  // console.log(trends)
  return trends
}

export const fetchMovieById = async ({ movieId }) => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  )
  const movieDetails = await response.data
  // console.log(movieDetails)
  return movieDetails
}

export const fetchTvById = async ({ movieId }) => {
  const response = await axios.get(
    `/tv/${movieId}?api_key=${API_KEY}&language=en-US`,
  )
  console.log(response)
  const tvDetails = await response.data
  console.log(tvDetails)
  return tvDetails
  // console.log(tvDetails)
}

// export const toggleFetchById = async () => {
//   const movieFetch = fetchMovieById()
//   const tvFetch = fetchTvById()
//   return movieId ? movieFetch : tvFetch
// }

// export const fetchMovieSearch = async () => {
//   const response = axios.get(
//     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
//   )
//   const movieSearch = await response
//   console.log(movieSearch)
//   return movieSearch
// }

// export const fetchTrending = async () => {
//   const response = await fetch(
//     `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
//   )

//   const trandingMovie = await response.json().then((data) => data.results)
//   console.log(trandingMovie)
//   return trandingMovie
// }

// export default { fetchTrending }

// console.log(fetchTrending())
