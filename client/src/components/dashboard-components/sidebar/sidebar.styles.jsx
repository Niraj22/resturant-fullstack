import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
`
export const Bar = styled.nav`
width:20rem;
height:100vh;
background-color:#43425d;
  @media (max-width: 820px) {
    width:6rem;
  }
`
export const Ulist = styled.div`
`
export const Lists = styled.div`
`
export const Items = styled(Link)`
display:flex;
cursor: pointer;
text-decoration:none;
padding-top:1rem;
padding-left:2rem;
padding-bottom:1rem;
align-items:center;
&:hover {
    background-color:#3b3b53; 
  }
`
export const Title = styled.div`
color:#ffff;
font-size:1.7rem;
  @media (max-width: 820px) {
    display:none
  }
`