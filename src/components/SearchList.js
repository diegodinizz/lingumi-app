import styled from 'styled-components'

import { SearchItem } from '../components/SearchItem'

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
      list.map(item => <SearchItem key={item.id} item={item} />)
    ) : (
      <NoMatches>No videos found</NoMatches>
    )}
  </Container>
)
