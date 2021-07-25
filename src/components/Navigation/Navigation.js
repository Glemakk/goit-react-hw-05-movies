// import { NavLink } from 'react-router-dom'
import { Link } from './Navigation.styled'

const Navigation = () => {
  return (
    <nav>
      <Link exact to="/">
        Home
      </Link>
      <Link to="/movies">Movies</Link>
    </nav>
  )
}
export default Navigation
