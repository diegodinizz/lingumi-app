import { useState } from 'react'
import styled, { css } from 'styled-components'

import star from '../assets/star.png'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #41444b;
  width: 30%;
  min-width: 400px;
  height: auto;
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const Title = styled.p`
  font-weight: 700;
  font-size: 1.2em;
  margin: 0;
  text-align: center;
`
const Teacher = styled.span`
  font-size: 1em;
  margin-top: 15px;
  font-weight: 400;
`

const Rating = styled.div`
  font-size: 1.1em;
  margin-top: 15px;
  font-weight: 300;
  font-style: italic;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-top: 20px;
`

const Details = styled.p`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1.1em;
  margin: 0;
`

const turnArrow = css`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transition: transform 300ms ease-out;
`

const Arrow = styled.i`
  margin-right: 0.5rem;
  border: solid #41444b;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: transform 300ms ease-out;
  &.turn {
    ${turnArrow}
  }
`

const showDetails = css`
  display: block;
`

const TagsContainer = styled.div`
  display: none;
  margin-top: 20px;
  font-weight: 300;
  font-style: italic;

  &.active {
    ${showDetails}
  }
`

const Tag = styled.p`
  font-size: 1em;
  display: inline-block;
  margin: 0 0 0 7px;
`

const StarIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`

export const SearchItem = ({ item }) => {
  const { videoTitle, teacherName, averageUserRating, tags } = item
  const [active, setActive] = useState(false)

  return (
    <Container>
      <Title>{videoTitle}</Title>
      <Teacher>Teacher: {teacherName}</Teacher>
      <Rating>
        <StarIcon src={star} alt='star-icon' /> {averageUserRating.toFixed(2)}
      </Rating>
      <DetailsContainer onClick={() => setActive(!active)}>
        <Details>Details</Details>
        <Arrow className={active ? 'turn' : ''}></Arrow>
      </DetailsContainer>
      <TagsContainer className={active ? 'active' : ''}>
        Tags:
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>
    </Container>
  )
}
