import styled from 'styled-components'

import { Header } from '../components/Header'
import { Search } from '../containers/Search'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: #5fbbdd;
  font-size: 3em;
  font-weight: 900;
  margin: 4rem 0;
`

export const Home = () => (
  <Container>
    <Header />
    <Title>Search Video Tutorials</Title>
    <Search />
  </Container>
)
