import styled from 'styled-components'

import logo from '../assets/lingumi_logo.png'

const Container = styled.div`
  display: flex;
  height: 90px;
  width: 100%;
  background-color: #fff;
`

const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  align-self: center;
`

const Logo = styled.img`
  height: 60px;
`

export const Header = () => (
  <Container>
    <ContentContainer>
      <Logo src={logo} alt='lingumi-logo' />
    </ContentContainer>
  </Container>
)
