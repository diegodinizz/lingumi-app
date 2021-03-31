import { useState } from 'react'
import styled from 'styled-components'

import { Header } from '../components/Header'
import { SearchBox } from '../components/SearchBox'

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TagTitle = styled.h1`
  color: #5fbbdd;
  font-size: 3em;
  font-weight: 900;
`

export const SearchTags = () => {
  const [search, setSearch] = useState('')

  function handleChange (event) {
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <TagsContainer>
      <Header button url='' />
      <TagTitle>Search Video Tutorials By Tags:</TagTitle>
      <SearchBox
        name='search'
        value={search}
        placeholder='Search Tags'
        onChange={handleChange}
      />
    </TagsContainer>
  )
}
