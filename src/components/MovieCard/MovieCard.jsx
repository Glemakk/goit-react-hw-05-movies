import { lazy, Suspense } from 'react'
import { useRouteMatch, Route, Switch } from 'react-router-dom'
import {
  CardContainer,
  Description,
  AdditionalInfo,
  AdditionalLink,
} from './MovieCard.styled'
import Loader from '../Loader'

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
  //   console.log('url >>', url)
  //   console.log('path >>', path)
  const score = movie.vote_average * 10
  console.log('movie >>', movie)
  // console.log('score >>', score)
  return (
    <>
      <CardContainer>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        ></img>
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
          <AdditionalLink to={`${url}/cast`}>Cast</AdditionalLink>
          <AdditionalLink to={`${url}/reviews`}>Reviews</AdditionalLink>
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
    </>
  )
}
export default MovieCard
