import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  margin: 4rem 0 2rem 0;
`
const Tags = styled(Link)`
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  font-style: italic;
  color: #7a8285;
  margin: 0 0 2rem 0;
  cursor: pointer;
`

export const Home = () => (
  <Container>
    <Header />
    <Title>Search Video Tutorials</Title>
    <Tags to='/tags'>Or Search for Tags</Tags>
    <Search />
  </Container>
)
