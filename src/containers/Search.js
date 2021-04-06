import { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { SearchBox } from '../components/SearchBox'
import { SearchList } from '../components/SearchList'
import { Spinner } from '../components/Spinner'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Search = () => {
  const [search, setSearch] = useState('')

  const data = useSelector(state => state.videoData)
  const fetching = useSelector(state => state.isFetching)

  function searchForTutorials () {
    const result = data.filter(title =>
      title.videoTitle.toLowerCase().includes(search)
    )

    if (fetching) {
      return <Spinner />
    }

    return <SearchList list={result} />
  }

  return (
    <Container>
      <SearchBox
        name='search'
        value={search}
        placeholder='e.g. "Practice" or "Learn"'
        onChange={event => setSearch(event.target.value.toLowerCase())}
      />
      {search ? searchForTutorials() : null}
    </Container>
  )
}
