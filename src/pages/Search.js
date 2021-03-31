import { useState, useEffect } from 'react'
import styled from 'styled-components'

// import background from '../assets/background.png'
import { Header } from '../components/Header'
import { SearchBox } from '../components/SearchBox'
import { handleErrors } from '../utils/error.utils'

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: #5fbbdd;
  font-size: 3em;
  font-weight: 900;
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
  // const [tags, setTags] = useState([])
  const [filteredTitle, setFilteredTitle] = useState([])

  // function handleTags (data) {
  //   let tags = []

  //   data.forEach(element => tags.push(...element.tags))

  //   const unique = tags.filter((tag, index) => tags.indexOf(tag) === index)

  //   setTags(unique)
  // }

  useEffect(() => {
    async function onLoad () {
      try {
        const response = await fetch(
          'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials'
        )
        const data = await handleErrors(response)

        setData(data)
        // handleTags(data)
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

  // const filteredTitle = data.filter(title =>
  //   title.videoTitle.toLowerCase().includes(search)
  // )

  return (
    <SearchContainer>
      {/* <Background /> */}
      <Header button url='' />
      <Title>Search Video Tutorials By Title:</Title>
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
