import styled from 'styled-components'
export const ContainerAll = styled.div`
margin:3rem;
text-align:center;
position:relative;
  @media (max-width: 820px) {
    margin:1rem;
  }
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

