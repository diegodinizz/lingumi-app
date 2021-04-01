import styled from 'styled-components'

import { SearchItem } from './SearchItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto 3rem auto;
`

const NoMatches = styled.p`
  font-size: 1.3em;
  color: #545454;
`

export const SearchList = ({ list }) => (
  <Container>
    {list.length ? (
      list.map((item, index) => <SearchItem key={index} item={item} />)
    ) : (
      <NoMatches>No matches found</NoMatches>
    )}
  </Container>
)
