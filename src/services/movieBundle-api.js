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
  try {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`)
    const trends = await data.results

    return trends
  } catch (error) {
    console.error('Error in fetchTrending', error)
  }
}

export const fetchMovieById = async ({ movieId }) => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  )
  console.log('response ById >>', response.data)
  const movieDetails = await response.data
  console.log(movieDetails)
  return movieDetails
  //=============

  //=========
  // const movieDetails = await ((response) => {
  //   if (response.ok) {
  //     return response.json()
  //   }
  //   throw new Error(response.statusText)
  // })
  // .then(data => console.log(data))
  //============

  // try {
  //       const response = await axios.get(
  //     `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  //   )
  //   const data = response => (if (response.status === 200) {

  //   }
  //     } catch (error) {
  //       console.log('Ошибка')
  //     }
}

export const fetchTvById = async ({ movieId }) => {
  const response = await axios.get(
    `/tv/${movieId}?api_key=${API_KEY}&language=en-US`,
  )
  console.log(response)
  const tvDetails = await response.data.genres
  console.log(tvDetails)
  return tvDetails
  // console.log(tvDetails)
}

// export const toggleFetchById = async () => {
//   const movieFetch = fetchMovieById()
//   const tvFetch = fetchTvById()
//   return movieId ? movieFetch : tvFetch
// }

export const fetchMovieSearch = async (searchQuery, currentPage) => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${currentPage}&language=en-US`,
    )
    // const state = await response.data.results
    const movieSearch = await response.data.results
    console.log('fetchSearch >>', movieSearch)
    return movieSearch
  } catch (error) {
    console.log('Problem with fetchMovieSearch')
  }
}
console.log(fetchMovieSearch('batman', 1))

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
