import styled from 'styled-components'
export const Container = styled.div`
margin:1rem;
min-width:33rem;
min-height:45rem;
padding:2rem;
display:flex;
flex-direction:column;
box-shadow: hsla(0, 0%, 0%, 0.15) 0px 4px 12px 0px;
 &:hover {
    -moz-transform: translate(-2px, -2px);
    -ms-transform: translate(-2px, -2px);
    -o-transform: translate(-2px, -2px);
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
  }
`
export const Image = styled.img`
width:303px;
height:202px;
object-fit:cover;
margin-bottom:4px;
`
export const Title = styled.h2`
  color:hsl(0, 0%, 7%);
  font-size:2.2rem;
  line-height:2.4rem;
  gap:normal;
  font-weight:light;
  font-weight:400;
  text-transform:capitalize;
`

export const Description = styled.p`
width:30.3rem;
height:15.3rem;
margin-top:1rem;
margin-bottom:1.5rem;
color:hsl(0, 0%, 46%);
font-size:1.4rem;
text-align: justify;
text-justify: inter-word;
font-weight:lighter;
line-height:19px;
border-bottom:0.4px solid grey;
`
export const Stats = styled.div`
display:flex;
justify-content:space-around;
`
export const Topic = styled.div`
  color:#40414d;
  font-size:1.4rem;
`