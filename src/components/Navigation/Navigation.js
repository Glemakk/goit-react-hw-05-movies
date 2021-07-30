// import { NavLink } from 'react-router-dom'
import Container from '../Container'
import { Link, HeaderTitle, Nav } from './Navigation.styled'

const Navigation = () => {
  return (
    <Container>
    <Nav>
      <div>
        <Link  activeClassName="activeLink" exact to="/">
          Home
        </Link>
        <Link className="link" activeClassName="activeLink" to="/movies">
          Movies
        </Link>
      </div>
      <div>
        <HeaderTitle>Trending movies</HeaderTitle>
      </div>
      </Nav>
      </Container>
  )
}
export default Navigation
