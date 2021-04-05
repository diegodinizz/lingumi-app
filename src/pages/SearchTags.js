import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Header } from '../components/Header'
// import { SearchList } from '../components/SearchList'
import { TagList } from '../components/TagList'
import { handleErrors } from '../utils/error.utils'

import star from '../assets/star.png'

const TagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    margin: 1rem auto 3rem auto;
    width: 30%;
  }

  th {
    padding: 10px;
    /* border-bottom: 2px solid #ddd; */
    text-align: start;
  }

  td {
    padding: 10px;
    border-top: 1px solid #ddd;
  }
`

const TagTitle = styled.h1`
  color: #5fbbdd;
  font-size: 3em;
  font-weight: 900;
`

const TagInputContainer = styled.div`
  width: 25rem;
`

const TagInput = styled.input`
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  font-size: 17px;
  color: #545454;
  /* box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%); */

  ::placeholder {
    color: gainsboro;
  }
`

const TagsDropdown = styled.ul`
  list-style: none;
  background-color: white;
  border-top: 1px dashed #eaeaea;
  width: 100%;
  margin: 0;
  padding: 0;
  border-radius: 5px;
  /* height: 12rem;
  overflow: scroll;
  position: absolute;
  padding: 0;
  left: 0; */
  /* top: 70%; */
  /* box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
  -webkit-box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
  -moz-box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1); */
`

const TagItem = styled.li`
  font-size: 1.3em;
  color: #545454;
  font-weight: 400;
  /* text-align: end; */
  padding: 10px;
  /* border-bottom: 1px solid #eaeaea; */
  cursor: pointer;

  :hover {
    background-color: #5fbbdd;
    color: white;
  }
`

const NoMatches = styled.p`
  font-size: 1.3em;
  color: #545454;
  text-align: center;
`

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

const TagName = styled.td`
  ::first-letter {
    text-transform: uppercase;
  }
`

export const SearchTags = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([])
  const [tags, setTags] = useState([])
  const [tagList, setTagList] = useState([])
  const [tagName, setTagName] = useState('')

  function getTagList (data) {
    const tags = []
    data.forEach(element => tags.push(...element.tags))

    setTagList(
      tags.filter((item, index, array) => array.indexOf(item) === index)
    )
  }

  useEffect(() => {
    async function onLoad () {
      try {
        const response = await fetch(
          'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials'
        )
        const data = await handleErrors(response)

        setData(data)
        getTagList(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    onLoad()
  }, [])

  // function getTopRatedTutorialsForTags (tagName) {
  //   // setTags(
  //   //   data
  //   //     .filter(item =>
  //   //       item.tags.some(tag => tag.toLowerCase().includes(search))
  //   //     )
  //   //     .map(item => item)
  //   // )

  //   setTags(
  //     data
  //       .filter(item =>
  //         item.tags.some(tag => tag.toLowerCase().includes(tagName))
  //       )
  //       // .map(item => item)
  //       .sort((a, b) => b.averageUserRating - a.averageUserRating)
  //     // .slice(0, 20)
  //   )
  // }

  // function handleChange (event) {
  //   setSearch(event.target.value.toLowerCase())
  //   //     setFilteredTags(tagList.find(tag => tag.toLowerCase().includes(search)))
  //   // console.log(filteredTags)
  //   // setFilteredTags(tagList.filter(item => item.toLowerCase().includes(search)))

  //   // getTopRatedTutorialsForTags()
  // }

  // function handleSubmit (event) {
  //   event.preventDefault()
  //   getTopRatedTutorialsForTags()
  //   setRenderTags(!renderTags)
  //   setSearch('')
  // }

  function handleClick (item) {
    const tagName = item.toLowerCase()
    setTagName(tagName)

    setTags(
      data
        .filter(item =>
          item.tags.some(tag => tag.toLowerCase().includes(tagName))
        )
        .sort((a, b) => b.averageUserRating - a.averageUserRating)
    )
    setSearchTerm('')
  }

  function renderTagsDropdown (tagList) {
    const result = tagList.filter(tag => tag.toLowerCase().includes(searchTerm))

    if (result.length) {
      return (
        <TagsDropdown>
          {result.map((item, index) => (
            <TagItem key={index} onClick={() => handleClick(item)}>
              {item}
            </TagItem>
          ))}
        </TagsDropdown>
      )
    }

    return <NoMatches>No tags found</NoMatches>
  }

  // const results = tagList.filter(tag => tag.toLowerCase().includes(search))

  return (
    <TagsContainer>
      <Header />
      <TagTitle>Search Video Tutorials By Tags:</TagTitle>
      <TagInputContainer>
        <TagInput
          name='search'
          value={searchTerm}
          placeholder='Search Tags'
          onChange={event => setSearchTerm(event.target.value.toLowerCase())}
        />
        {searchTerm ? renderTagsDropdown(tagList) : null}
      </TagInputContainer>
      {/* {tags.length ? <TagList list={tags} tagName={tagName} /> : null} */}
      {tags.length ? (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Rating</th>
              <th>Title</th>
              <th>Tag</th>
            </tr>
          </thead>
          <tbody>
            {tags
              .filter((item, index) => index < 20)
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1 + '. '}</td>
                  <td>
                    {' '}
                    <StarIcon src={star} alt='star-icon' />
                    {item.averageUserRating.toFixed(2)}
                  </td>
                  <td>{item.videoTitle}</td>
                  <TagName>{tagName}</TagName>
                </tr>
              ))}
          </tbody>
        </table>
      ) : null}
    </TagsContainer>
  )
}
