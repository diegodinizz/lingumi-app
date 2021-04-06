import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchVideoStartAsync } from '../redux/video/video.actions'

import { SearchBox } from '../components/SearchBox'
import { SearchList } from '../components/SearchList'
import { Spinner } from '../components/Spinner'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const data = useSelector(state => state.videoData)
  const fetching = useSelector(state => state.isFetching)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideoStartAsync())
  }, [dispatch])

  function searchForTutorials () {
    const result = data.filter(title =>
      title.videoTitle.toLowerCase().includes(searchTerm)
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
        value={searchTerm}
        placeholder='e.g. "Practice" or "Learn"'
        onChange={event => setSearchTerm(event.target.value.toLowerCase())}
      />
      {searchTerm ? searchForTutorials() : null}
    </Container>
  )
}
