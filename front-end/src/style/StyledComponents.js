import styled from 'styled-components';

export const Button = styled.button`
  background: white;
  border-radius: 5px;
  border: none;
  color: palevioletred;
  margin: 10px;
  padding: 0.25em 1em;
  transition: all .5s ease;
  cursor: pointer;

  &:hover {
    background-color: #FDBB63;
    color: white;
  }
`