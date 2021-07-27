import { useRouteMatch, Route, Switch } from 'react-router-dom'

import {
  CardContainer,
  Description,
  AdditionalInfo,
  AdditionalLink,
} from './MovieCard.styled'

import Cast from '../Cast'
import Rewievs from '../Rewievs'

const MovieCard = ({ movie }) => {
  const { path, url } = useRouteMatch()
  //   console.log('url >>', url)
  //   console.log('path >>', path)
  const score = movie.vote_average * 10
  //   console.log(score)
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
          <ul></ul>
          {movie.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </Description>
      </CardContainer>
      <AdditionalInfo>
        <h2>Additional iformation</h2>
        <ul>
          <AdditionalLink to={`${url}/cast`}>Cast</AdditionalLink>
          <AdditionalLink to={`${url}/rewievs`}>Rewievs</AdditionalLink>
        </ul>
      </AdditionalInfo>
      <hr />
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast movieId={movie.id} />
        </Route>
        <Route path={`${path}/rewievs`}>
          <Rewievs movieId={movie.id} />
        </Route>
      </Switch>
    </>
  )
}
export default MovieCard
