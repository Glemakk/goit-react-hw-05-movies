import { Link, useLocation } from 'react-router-dom'
import { List } from './TrandingList.styled'

const TrandingList = ({ trends, url = 'movies' }) => {
  // useRouteMatch() Это путь и он указывает "/", поэтому в пути to={`${match.url}movies/${trend.id}`}
  //   const match = useRouteMatch()
  //  console.log('match >>', match)
  // Вместо этого передаем url = 'movies' и нам необходимо будет поменять только один раз значение url

  const location = useLocation()
  console.log('location TrandingList >>', location)

  return (
    <>
      <h1>Popular movie today</h1>
      <List>
        {trends &&
          trends.map((trend) => (
            <li key={trend.id}>
              <Link
                to={{
                  //{`/${url}/${trend.id}`}
                  pathname: `/${url}/${trend.id}`,
                  state: { from: location },
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/t/p/w300/${trend.poster_path}`}
                  alt=""
                ></img>
                <p>{trend.name || trend.title}</p>
              </Link>
            </li>
          ))}
      </List>
    </>
  )
}

export default TrandingList
