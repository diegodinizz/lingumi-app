import styled from 'styled-components'

import logo from '../assets/lingumi-logo.png'
import { ReloadButton } from './ReloadButton'

const Container = styled.div`
  height: 90px;
  width: 100%;
  background-color: #fff;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  height: 60px;
`

export const Header = () => (
  <Container>
    <ContentContainer>
      <Logo src={logo} alt='lingumi-logo' />
      <ReloadButton />
    </ContentContainer>
  </Container>
)
