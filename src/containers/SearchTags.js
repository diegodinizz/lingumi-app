import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { TagList } from '../components/TagList'

import { handleErrors } from '../utils/error.utils'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const InputContainer = styled.div`
  width: 25rem;
`

const Input = styled.input`
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  font-size: 17px;
  color: #545454;

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
`

const TagsDropdownItem = styled.li`
  font-size: 1.3em;
  color: #545454;
  font-weight: 400;
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: #d25858;
    color: white;
  }
`

const NoMatches = styled.p`
  font-size: 1.3em;
  color: #545454;
  text-align: center;
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

  function getTopRatedTutorialsForTags (item) {
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
            <TagsDropdownItem
              key={index}
              onClick={() => getTopRatedTutorialsForTags(item)}
            >
              {item}
            </TagsDropdownItem>
          ))}
        </TagsDropdown>
      )
    }

    return <NoMatches>No tags found</NoMatches>
  }

  return (
    <Container>
      <InputContainer>
        <Input
          name='search'
          value={searchTerm}
          placeholder='e.g. "Engaging" or "Exciting"'
          onChange={event => setSearchTerm(event.target.value.toLowerCase())}
        />
        {searchTerm ? renderTagsDropdown(tagList) : null}
      </InputContainer>
      {tags.length ? <TagList tags={tags} tagName={tagName} /> : null}
    </Container>
  )
}
