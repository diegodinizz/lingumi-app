import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { SearchBox } from '../components/SearchBox'
import { SearchList } from '../components/SearchList'

import { handleErrors } from '../utils/error.utils'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Search = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    async function onLoad () {
      try {
        const response = await fetch(
          'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials'
        )
        const data = await handleErrors(response)

        setData(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    onLoad()
  }, [])

  function searchForTutorials () {
    const result = data.filter(title =>
      title.videoTitle.toLowerCase().includes(search)
    )

    return <SearchList list={result} />
  }

  return (
    <Container>
      <SearchBox
        name='search'
        value={search}
        placeholder='e.g. "practice" or "learn"'
        onChange={event => setSearch(event.target.value.toLowerCase())}
      />
      {search ? searchForTutorials() : null}
    </Container>
  )
}
