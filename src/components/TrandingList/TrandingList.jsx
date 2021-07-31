import { Link, useLocation } from 'react-router-dom'
import { List, ItemImg, Item } from './TrandingList.styled'
import Container from '../Container'
import noAvailableImg from '../../img/No-Image-Placeholder.svg'

const TrandingList = ({ movies, url = 'movies' }) => {
  // useRouteMatch() Это путь и он указывает "/", поэтому в пути to={`${match.url}movies/${trend.id}`}
  //   const match = useRouteMatch()
  //  console.log('match >>', match)
  // Вместо этого передаем url = 'movies' и нам необходимо будет поменять только один раз значение url
  const location = useLocation()

  // const posterPath = trend.poster_path
  //   ? `https://image.tmdb.org/t/p/w500/t/p/w300/${trend.poster_path}`
  //   : noAvailableImg

  return (
    <Container>
      <List>
        {movies &&
          movies.map((trend) => (
            <Item key={trend.id}>
              <Link
                to={{
                  //{`/${url}/${trend.id}`}
                  pathname: `/${url}/${trend.id}`,
                  state: { from: location },
                }}
              >
                <ItemImg
                  src={
                    trend.poster_path
                      ? `https://image.tmdb.org/t/p/w500/t/p/w300/${trend.poster_path}`
                      : noAvailableImg
                  }
                  alt=""
                ></ItemImg>
                <p>{trend.name || trend.title}</p>
              </Link>
            </Item>
          ))}
      </List>
    </Container>
  )
}

export default TrandingList
