import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Container = styled.div`
  background-color: white;
  display: inline-block;
  margin: 1rem;
  width: 36rem;
  height: 20rem;
  box-shadow: hsla(0, 0%, 0%, 0.15) 0px 4px 12px 0px;
  transition: all 0.5s;
  &:hover {
    -moz-transform: translate(-2px, -2px);
    -ms-transform: translate(-2px, -2px);
    -o-transform: translate(-2px, -2px);
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 1rem;
    margin-left: 2rem;
    width: 31rem;
  }
  @media (max-width: 376px) {
    margin-left: 0.5rem;
  }
`;

export const Category = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: -webkit-linear-gradient(4deg,#fd6a00, #bc2b55);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LinkMenu = styled.a`
font-size:1.9rem;
`