import styled from 'styled-components'

const Container = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 200px;
  margin-bottom: 30px;
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
