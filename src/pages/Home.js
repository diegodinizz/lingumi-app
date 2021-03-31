import styled from 'styled-components'

import { Header } from '../components/Header'
import { CustomButton } from '../components/CustomButton'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: #5fbbdd;
  font-size: 3em;
  font-weight: 900;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
`

export const Home = () => (
  <Container>
    <Header />
    <Title>Search Video Tutorials</Title>
    <ButtonsContainer>
      <CustomButton url='/search'>By Title</CustomButton>
      <CustomButton url='/tags'>By Tags</CustomButton>
    </ButtonsContainer>
  </Container>
)
