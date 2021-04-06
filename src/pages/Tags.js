import styled from 'styled-components'

import { Header } from '../components/Header'
import { SearchTags } from '../containers/SearchTags'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: #5fbbdd;
  font-size: 3em;
  font-weight: 900;
  margin: 4rem 0 2rem 0;
`

export const Tags = () => (
  <Container>
    <Header />
    <Title>Search Video Tutorials by Tag</Title>
    <SearchTags />
  </Container>
)
