import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import SearchForm from '../components/SearchForm'
import TrandingList from '../components/TrandingList/TrandingList'
import MovieCard from '../components/MovieCard'
import * as MovieBundleApi from '../services/movieBundle-api'

// // const MoviesView = () => {
// //   return <SearchForm>Movies Search</SearchForm>
// // }
// // export default MoviesView

// // Переделываем

// import Searchbar from './components/Searchbar'
// import ImageGallery from './components/ImageGallery'
import Button from '../components/LoadMoreButton/LoadMoreButton'
// import Loader from './components/Loader'
// import Modal from './components/Modal'

const MoviesView = () => {
  const [movie, setMovie] = useState([])
  const [searchMovie, setSearchMovie] = useState('')
  const [page, setPage] = useState(1)
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  // const [showModal, setShowModal] = useState(false)
  // const [largeImage, setLargeImage] = useState('')
  // const isFirstRender = useRef(true)

  useEffect(() => {
    if (!searchMovie) {
      return
    }
    fetchQueryMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMovie])

  const fetchQueryMovie = async () => {
    const queryRequest = await MovieBundleApi.fetchMovieSearch(
      searchMovie,
      page,
    )
    console.log('queryRequest >>', queryRequest)
    // setMovie(queryRequest)
    setMovie((prevState) => [...prevState, ...queryRequest])
    onClickLoadMore()
  }

  const onClickLoadMore = () => {
    setPage((prevState) => prevState + 1)
  }

  const onFormSubmit = (movie) => {
    setSearchMovie(movie)
    setPage(1)
    setMovie([])
  }

  console.log('movie в MovieViews', movie)
  return (
    <div>
      <SearchForm onSubmit={onFormSubmit}>Movies Search</SearchForm>
      {movie && <TrandingList movies={movie} />}
      {movie.length > 0 && (
        <Button
          text="Load more"
          page={page}
          response={movie}
          onClick={fetchQueryMovie}
        />
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  )
}
export default MoviesView
