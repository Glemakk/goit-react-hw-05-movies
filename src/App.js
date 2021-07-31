import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppBar from './components/AppBar'
import Loader from './components/Loader'
// import Container from './components/Container'
// import HomeView from './views/HomeView'
// import MoviesView from './views/MoviesView'
// import MovieDetailsView from './views/MovieDetailsView'
// import NotFoundView from './views/NotFoundView'

const HomeView = lazy(
  async () =>
    await import('./views/HomeView.js' /*webpackChunkName: "home-view"*/),
)
const MoviesView = lazy(
  async () =>
    await import('./views/MoviesView' /*webpackChunkName: "movies-view"*/),
)
const MovieDetailsView = lazy(
  async () =>
    await import(
      './views/MovieDetailsView' /*webpackChunkName: "movie-details-view"*/
    ),
)

const App = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Redirect to="/" />
          <Route></Route>
        </Switch>
      </Suspense>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  )
}

export default App
