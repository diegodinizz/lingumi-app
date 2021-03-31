import { useState, useEffect } from 'react'
import styled from 'styled-components'

// import background from '../assets/background.png'
import { SearchBox } from '../components/SearchBox'
import { handleErrors } from '../utils/error.utils'

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #eaf3f5;
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

const SearchTitle = styled.h1`
  color: #5fbbdd;
  font-size: 3em;
  font-weight: 900;
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

  function handleChange (event) {
    setSearch(event.target.value.toLowerCase())
  }

  const filteredTitle = data.filter(title =>
    title.videoTitle.toLowerCase().includes(search)
  )

  return (
    <SearchContainer>
      {/* <Background /> */}
      <SearchTitle>Search Video Tutorials</SearchTitle>
      <SearchBox
        name='search'
        value={search}
        placeholder='Search tutorials'
        onChange={handleChange}
      />
      {search ? (
        <ul>
          {filteredTitle.map(({ id, videoTitle }) => (
            <li key={id}>{videoTitle}</li>
          ))}
        </ul>
      ) : null}
    </SearchContainer>
  )
}
