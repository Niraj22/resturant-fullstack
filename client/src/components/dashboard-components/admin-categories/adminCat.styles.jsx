import styled from 'styled-components'
export const ContainerAll = styled.div`
margin:3rem;
text-align:center;
position:relative;
`
export const HeadContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
 @media (max-width: 820px) {
    flex-direction:column;
  }
`
export const TextContainer = styled.div`
font-size:1.7rem;
line-height: 1.7;
background: -webkit-linear-gradient(#fd6a00, #bc2b55);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

export const ListContainer = styled.div`

`
export const List = styled.div`
background-color:#e6e6e6;
margin-top:1rem;
padding:15px;
display:flex;
color:#40414d;
border-bottom:1px solid #40414d;
justify-content:space-between;
align-content:center;
font-size:1.5rem;
`
export const Category = styled.div`
font-family:inherit;
`
export const Icon = styled.div`
cursor: pointer;
`

