import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import SearchForm from '../components/SearchForm'
import TrandingList from '../components/TrandingList/TrandingList'

import * as MovieBundleApi from '../services/movieBundle-api'

// // const MoviesView = () => {
// //   return <SearchForm>Movies Search</SearchForm>
// // }
// // export default MoviesView

// // Переделываем

// import Searchbar from './components/Searchbar'
// import ImageGallery from './components/ImageGallery'
import Button from '../components/LoadMoreButton/LoadMoreButton'
// import Loader from '../components/Loader'
// import Loader from './components/Loader'
// import Modal from './components/Modal'

const MoviesView = () => {
  const location = useLocation()
  const history = useHistory()
  // console.log('location IN MoviesView >>', location)
  // console.log('history IN MoviesView', history)
  const sortQuery = new URLSearchParams(location.search).get('title') ?? ''
  const [movie, setMovie] = useState([])

  const [searchMovie, setSearchMovie] = useState(sortQuery || '')
  // console.log('searchMovie', searchMovie)
  const [page, setPage] = useState(1)

  // const [loading, setLoading] = useState(false)
  //======
  // const [error, setError] = useState(null)
  //========
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

  useEffect(() => {
    if (location.search === '') {
      return
    }
    history.push({
      ...location,
      search: `title=${searchMovie}`,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchMovie])

  const fetchQueryMovie = async () => {
    const queryRequest = await MovieBundleApi.fetchMovieSearch(
      searchMovie,
      page,
    )

    // setMovie(queryRequest)
    setMovie((prevState) => [...prevState, ...queryRequest])
    onClickLoadMore()
  }

  const onClickLoadMore = () => {
    setPage((prevState) => prevState + 1)
  }

  // const sortQuery = new URLSearchParams(location.search).get('title') ?? ''
  // console.log('sortQuery >>', sortQuery)

  const onFormSubmit = (searchMovie) => {
    setSearchMovie(searchMovie)
    history.push({
      ...location,
      search: `title=${searchMovie}`,
    })
    setPage(1)
    setMovie([])
  }

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
