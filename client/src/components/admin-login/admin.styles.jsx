import styled from 'styled-components'
export const FormInput = styled.input`
  background: none;
  background-color: white;
  font-size: 1.5rem;
  padding: 1rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 1rem 0;
  &:focus {
    outline: none;
    border-bottom: 1px solid orangered;
  }
`

export const FormLabel = styled.label`
font-family:inherit;
font-size:1.7rem;
`

export const Button = styled.button`
  margin-top: 1.5rem;
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  width: 13rem;
  color: #ffffff;
  font-weight: lighter;
  background: linear-gradient(10deg, #fd6000, #bc2b55);
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  position: relative;
  border: none;
  outline: none;
  &:hover {
    background: linear-gradient(10deg, #bc2b55, #fd6000);
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #bc2b21;
    padding: 1rem 2rem 1rem 1rem;}
`