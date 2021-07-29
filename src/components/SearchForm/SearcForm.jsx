import { useState } from 'react'
import { toast } from 'react-toastify'
import {
  SearchContainer,
  Form,
  SearchButton,
  SearchFormButtonLabel,
  Input,
} from './SearchForm.styled'

const SearchForm = ({ onSubmit }) => {
  // console.log(onSubmit.length)
  const [query, setQuery] = useState('')

  const handleChange = ({ target }) => {
    const value = target.value

    setQuery(value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query.trim() === '') {
      toast.warning('Tap some word for searching!')
      return
    }
    onSubmit(query)
    clearForm()
  }

  const clearForm = () => {
    setQuery('')
  }

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
