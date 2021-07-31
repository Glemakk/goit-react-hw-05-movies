import { lazy, Suspense } from 'react'
import { useRouteMatch, useLocation, Route, Switch } from 'react-router-dom'
import {
  CardContainer,
  Description,
  AdditionalInfo,
  AdditionalLink,
} from './MovieCard.styled'
import Container from '../Container'
import Loader from '../Loader'
import noAvailableImg from '../../img/No-Image-Placeholder.svg'
console.log(noAvailableImg)

// import Cast from '../Cast'
// import Reviews from '../Reviews'

const Cast = lazy(
  async () => await import('../Cast' /*webpackChunkName: "cast-component" */),
)
const Reviews = lazy(
  async () =>
    await import('../Reviews' /*webpackChunkName: "reviews-component" */),
)

const MovieCard = ({ movie }) => {
  const { path, url } = useRouteMatch()
  const location = useLocation()
  const score = movie.vote_average * 10

  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : noAvailableImg

  return (
    <Container>
      <CardContainer>
        <img src={posterPath} alt=""></img>
        <Description>
          <h2>{movie.title}</h2>
          <h3>User score:</h3>
          <p>{score}%</p>
          <h3>Overview:</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </Description>
      </CardContainer>
      <AdditionalInfo>
        <h2>Additional iformation</h2>
        <ul>
          <AdditionalLink
            to={{
              pathname: `${url}/cast`,
              state: {
                from: location?.state?.from ?? `${url}`,
                // label: 'Back to search',
              },
            }}
          >
            Cast
          </AdditionalLink>
          <AdditionalLink
            to={{
              pathname: `${url}/reviews`,
              state: {
                from: location?.state?.from ?? `${url}`,
                // label: 'Back to search',
              },
            }}
          >
            Reviews
          </AdditionalLink>
        </ul>
      </AdditionalInfo>
      <hr />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast movieId={movie.id} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews movieId={movie.id} />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  )
}
export default MovieCard
