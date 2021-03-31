import styled from 'styled-components'

const Container = styled.input`
  border: none;
  border-radius: 14px;
  outline: none;
  padding: 10px;
  width: 15rem;
  height: 45px;
  margin-bottom: 30px;
  font-size: 15px;
`

export const SearchBox = ({ name, value, placeholder, onChange }) => (
  <Container
    type='search'
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    required
  />
)
