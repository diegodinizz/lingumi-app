import styled from 'styled-components'
import { Link } from 'react-router-dom'

import refresh from '../assets/refresh-icon.png'

const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 8.5rem;
  height: 40px;
  border-radius: 14px;
  background-color: #2cab58;
  -webkit-transition: box-shadow 0.2s, -webkit-filter 0.2s,
    -webkit-transform 0.2s;
  transition: box-shadow 0.2s, filter 0.2s, transform 0.2s, -webkit-filter 0.2s,
    -webkit-transform 0.2s;
  color: #fff;
  text-align: center;
  font-weight: 800;
  line-height: 40px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    box-shadow: 7px 7px 20px -10px rgba(0, 0, 0, 0.2);
    -webkit-filter: brightness(110%);
    filter: brightness(110%);
    -webkit-transform: translate(0, -2px);
    -ms-transform: translate(0, -2px);
    transform: translate(0, -2px);
    text-decoration: none;
  }
`

const RefreshIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`

export const CustomButton = ({ children, refreshIcon, url }) => (
  <Container to={url}>
    {children}
    {refreshIcon ? <RefreshIcon src={refresh} alt='refresh-icon' /> : null}
  </Container>
)
