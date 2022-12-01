import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
width: 100%;
height: auto;
background-color: ${({theme}) => theme.bg};
display: flex;
flex-direction: column;
padding: 20px;
`

export const Main = styled.div`
width: 100%;
height: auto;
background-color: ${({theme}) => theme.bg};
display: flex;
`

export const Main1 = styled.div`
width: 100%;
height: auto;
background-color: ${({theme}) => theme.bg};
display: flex;
`

export const Container = styled.div`
width: 50%;
height: 500px;
/* background-color: green; */
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;

.text-holder {
  width: 370px;
  height: 200px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-holder h1 {
  text-align: center;
font-family: 'Roboto', sans-serif;
color: ${({theme}) => theme.primary};
}

.holder {
  width: 100%;
}

.holder p {
color: ${({theme}) => theme.primary1};
text-align: center;
}

`

export const Container1 = styled.div`
width: 50%;
height: 500px;
background-color: black;
overflow: hidden;
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
`

export const Container2 = styled.div`
width: 50%;
height: 500px;
padding: 40px;
overflow: hidden;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;

.text-holder h1 {
  text-align: start;
font-family: 'Roboto', sans-serif;
color: ${({theme}) => theme.primary};
}

.holder {
  width: 100%;
}

.holder p {
color: ${({theme}) => theme.primary1};
text-align: start;
}
`
export const Container3 = styled.div`
width: 50%;
height: 500px;
padding: 40px;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;

.course-holder {
  width: 70%;
  /* border: 1px solid red; */
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.course-holder div {
  height: 45px;
  width: 300px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 10px;
  background-color: ${({theme}) => theme.primary1};
}

`


export const ButtonContainer = styled.div`
border: 1px solid ${({theme}) => theme.primary};
margin: 10px;
width: 150px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
color: ${({theme}) => theme.primary1};
font-size: 20px;
transition: all ease-out .26s;
&:hover {
    background-color: ${({theme}) => theme.primary1};
}

@media screen and (max-width: 960px){
    width: 100%;
    border: 1px solid ${({theme}) => theme.primary1};
}
`

export const NavLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
justify-content: center;
color: inherit;
font-size: 16px;
font-family: 'Roboto', sans-serif;
color: ${({theme}) => theme.primary};
/* width: 100%; */
&::after {
    content: '';
    position: absolute;
    width: 0px;
    height: 2px;
    background-color: ${({theme}) => theme.primary1};
    border-radius: 10px;
    margin-top: 25px;
    transition: all ease-out .26s;
}
&:hover::after {
    width: 90px;
}
@media screen and (max-width: 960px) {
    padding: 30px;
}
`