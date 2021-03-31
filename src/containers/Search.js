import { useState } from 'react'
import styled from 'styled-components'

import { SearchBox } from '../components/SearchBox'

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
`

export const Search = () => {
  const [search, setSearch] = useState('')

  function handleChange (event) {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <SearchContainer>
      <SearchBox
        name='search'
        value={search}
        placeholder='Search tutorials'
        onChange={handleChange}
      />
    </SearchContainer>
  )
}
