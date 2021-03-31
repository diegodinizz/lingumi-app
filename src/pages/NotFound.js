import styled from 'styled-components'

import { Header } from '../components/Header'

const Container = styled.div`
  text-align: center;
`

export const NotFound = () => {
  return (
    <Container>
      <Header />
      <h3>Sorry, page not found!</h3>
    </Container>
  )
}
