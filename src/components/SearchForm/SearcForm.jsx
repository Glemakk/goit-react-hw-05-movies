import { useState } from 'react'
// import { useLocation, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  SearchContainer,
  Form,
  SearchButton,
  SearchFormButtonLabel,
  Input,
} from './SearchForm.styled'

const SearchForm = ({ onSubmit }) => {
  // const location = useLocation()
  // const history = useHistory()
  // const routerState = useRef(null)
  // console.log('location.search в searchForm>>', location.search)
  // console.log('history в searchForm', history)
  // console.log('routerState', routerState)

  const [query, setQuery] = useState('')

  // useEffect(() => {
  //   if (!routerState.current) {
  //     return
  //   }
  //   routerState.current = location.state
  // }, [])

  const handleChange = ({ target }) => {
    const value = target.value
    // console.log('value', value)

    setQuery(value.toLowerCase())
  }

  // const sortQuery = new URLSearchParams(location.search).get('queryTitle')
  // console.log('sortQuery >>', sortQuery)

  // const onSearchMovieState = (e) => {
  //   const value = e.target.value
  //   // console.log('location in onSearchMovieState', location)
  //   // history.push({
  //   //   ...location,
  //   //   search: `queryTitle=${query}`,
  //   // })
  //   setQuery(value.toLowerCase())
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() === '') {
      toast.warning('Tap some word for searching!')
      return
    }
    onSubmit(query)
    // console.log('onSubmit(query)', onSubmit(query))
    setQuery('')
  }

  // const clearForm = () => {
  //   setQuery('')
  // }

  return (
    <SearchContainer>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchButton>

        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </Form>
    </SearchContainer>
  )
}

export default SearchForm
