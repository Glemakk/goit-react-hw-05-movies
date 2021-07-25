import { Link, useRouteMatch, useLocation } from 'react-router-dom'

const TrandingList = ({ trends }) => {
  const match = useRouteMatch()
  // const location = useLocation()
  // console.log('location >>', location.pathname)
  // console.log('match >>', match)
  // console.log(trends)
  return (
    <>
      <h1>Popular movie today</h1>
      <ul>
        {trends &&
          trends.map((trend) => (
            <li key={trend.id}>
              <Link to={`${match.url}movies/${trend.id}`}>
                <p>{trend.name || trend.title}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/t/p/w200/${trend.poster_path}`}
                  alt=""
                ></img>
              </Link>
            </li>
          ))}
      </ul>
    </>
  )
}

export default TrandingList
