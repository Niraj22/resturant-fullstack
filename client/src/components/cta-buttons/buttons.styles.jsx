import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled(Link)`
  margin-top: 2rem;
  font-family: inherit;
  text-decoration: none;
  text-align: center;
  width: 18rem;
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
  &::after {
    position: absolute;
    left: 90%;
    top: 19%;
    right: 7%;
    bottom: 0;
    text-decoration: none;
  }
  &:hover {
    background: linear-gradient(10deg, #bc2b55, #fd6000);
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #bc2b21;
    padding: 1rem 2rem 1rem 1rem;
    text-decoration: none;
    color: #ffffff;
    &::after {
      opacity: 1;
      transition: all 0.5s;
      text-decoration: none;
    }
  }
`;
