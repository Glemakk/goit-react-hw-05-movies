import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppBar from './components/AppBar'
import HomeView from './views/HomeView'
import MoviesView from './views/MoviesView'
import MovieDetailsView from './views/MovieDetailsView'
import NotFoundView from './views/NotFoundView'

const App = () => {
  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <MoviesView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  )
}

export default App
