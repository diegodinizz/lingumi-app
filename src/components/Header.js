import styled from 'styled-components'
import { useHistory } from 'react-router'

import logo from '../assets/lingumi-logo.png'
import { CustomButton } from './CustomButton'

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
  cursor: pointer;
`

export const Header = ({ button }) => {
  const history = useHistory()

  return (
    <Container>
      <ContentContainer>
        <Logo onClick={() => history.push('/')} src={logo} alt='lingumi-logo' />
        {button ? <CustomButton refreshIcon>Reload</CustomButton> : null}
      </ContentContainer>
    </Container>
  )
}
