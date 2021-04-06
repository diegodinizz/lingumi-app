import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { fetchVideoStartAsync } from '../redux/video/video.actions'

import { TagList } from '../components/TagList'
import { SearchBox } from '../components/SearchBox'
import { Spinner } from '../components/Spinner'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const SearchTags = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const data = useSelector(state => state.videoData)
  const fetching = useSelector(state => state.isFetching)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideoStartAsync())
  }, [dispatch])

  function getTopRatedTutorialsForTags () {
    const result = data
      .filter(item =>
        item.tags.some(item => item.toLowerCase().includes(searchTerm))
      )
      .sort((a, b) => b.averageUserRating - a.averageUserRating)

    if (fetching) {
      return <Spinner />
    }

    return <TagList tags={result} tagName={searchTerm} />
  }

  return (
    <Container>
      <SearchBox
        name='search'
        value={searchTerm}
        placeholder='e.g. "Engaging" or "Exciting"'
        onChange={event => setSearchTerm(event.target.value.toLowerCase())}
      />
      {searchTerm ? getTopRatedTutorialsForTags() : null}
    </Container>
  )
}
