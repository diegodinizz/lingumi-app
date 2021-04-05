import styled from 'styled-components'
import { TagItem } from './TagItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto 3rem auto;
  color: black;
`

// const NoMatches = styled.p`
//   font-size: 1.3em;
//   color: #545454;
// `

export const TagList = ({ list, tagName }) => (
  <Container>
    {list
      .filter((item, index) => index < 20)
      .map((item, index) => (
        <TagItem key={item.id} index={index} item={item} tagName={tagName} />
      ))}
  </Container>
)
