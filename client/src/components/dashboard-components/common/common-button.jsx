import styled from 'styled-components'
export const ButtonAdd = styled.button`
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  width: 14rem;
  color: #ffffff;
  font-weight: lighter;
  background: linear-gradient(10deg, #fd6000, #bc2b55);
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  position: relative;
  border: none;
  outline: none;
  &:hover {
    background: linear-gradient(10deg, #bc2b55, #fd6000);
    transition: all 0.5s;
  }
   @media (max-width: 820px) {
   margin-top:1rem;
  }
`