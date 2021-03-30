import styled from 'styled-components'

import { Header } from '../components/Header'

const Container = styled.div`
  height: 100%;
  width: 100%;
`

export const Home = () => (
  <Container>
    <Header />
  </Container>
)
