import styled from 'styled-components'

const Container = styled.input`
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  width: 25rem;
  height: 50px;
  font-size: 17px;
  color: #545454;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);

  ::placeholder {
    color: gainsboro;
  }
`

export const SearchBox = ({ name, value, placeholder, onChange }) => (
  <Container
    type='search'
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
)
