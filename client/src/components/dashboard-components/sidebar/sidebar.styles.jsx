import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const Container = styled.div`
`
export const Bar = styled.nav`
width:20rem;
min-height:170vh;
background-color:#e6e6e6;
  @media (max-width: 820px) {
    width:5rem;
    height:100%;
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
    background-color:whitesmoke; 
    text-decoration:none;
}
`
export const Title = styled.div`
color:#40414d;
font-size:1.7rem;
  @media (max-width: 820px) {
    display:none
  }
`