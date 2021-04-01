import { useState, useEffect } from 'react'
import styled from 'styled-components'

// import background from '../assets/background.png'
import { SearchBox } from '../components/SearchBox'
import { SearchList } from '../components/SearchList'
import { handleErrors } from '../utils/error.utils'

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

// const Background = styled.div`
//   background-image: url(${background});
//   width: 100%;
//   height: 100%;
//   background-size: contain;
//   background-color: black;
//   background-position-x: center;
//   background-position-y: center;
// `

export const Search = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [filteredTitle, setFilteredTitle] = useState([])

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
    setFilteredTitle(
      data.filter(title => title.videoTitle.toLowerCase().includes(search))
    )
  }

  function handleChange (event) {
    setSearch(event.target.value.toLowerCase())

    searchForTutorials()
  }

  return (
    <SearchContainer>
      {/* <Background /> */}
      <SearchBox
        name='search'
        value={search}
        placeholder='Search tutorials'
        onChange={handleChange}
      />
      {search ? <SearchList list={filteredTitle} /> : null}
    </SearchContainer>
  )
}
