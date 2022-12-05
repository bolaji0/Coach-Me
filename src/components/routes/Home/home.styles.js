import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Wrapper = styled.div`
width: 100%;
height: auto;
background-color: ${({theme}) => theme.text};
display: flex;
flex-direction: column;
padding: 20px;
`

export const Main = styled.div`
width: 100%;
height: auto;
background-color: ${({theme}) => theme.text};
display: flex;
@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}
`

export const Main1 = styled.div`
width: 100%;
height: auto;
background-color: ${({theme}) => theme.text};
display: flex;

@media screen and (max-width:  960px) {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`


export const Container = styled.div`
width: 50%;
height: 500px;
/* background-color: green; */
display: flex;
/* justify-content: space-between; */
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
letter-spacing: 2px;
}

@media screen and (max-width: 960px) {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 30px;

  .text-holder {
  max-width: 500px;
  /* width: 100%; */
}

.text-holder h1 {
  text-align: center;
font-family: 'Roboto', sans-serif;
}

.holder {
  width: 300px;
}

.holder p {
color: ${({theme}) => theme.primary1};
text-align: center;
letter-spacing: 2px;
}

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

@media screen and (max-width: 960px) {
width: 100%;
margin: 10px;
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
background-color: ${({theme}) => theme.text};

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

@media screen and (max-width: 960px){
  width: 100%;
  height: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;

  .text-holder h1 {
  text-align: start;
font-family: 'Roboto', sans-serif;
color: ${({theme}) => theme.primary};
margin-top: 20px;
}
.holder {
  width: 100%;
}
.holder p {
color: ${({theme}) => theme.primary1};
text-align: start;
margin-top: 50px;
margin-bottom: 20px;
}

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
background-color: ${({theme}) => theme.text};
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
  @media screen and (max-width: 960px){
    width: 100%;
   height: 500px;
   padding: 40px;
   display: flex;
   align-items: center;
   justify-content: center;

    .course-holder {
  width: 100%;
  /* border: 1px solid red; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
    .course-holder div {
  height: 45px;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 10px;
  background-color: ${({theme}) => theme.primary1};
  }
}

`


export const ButtonContainer = styled.div`
border: 1px solid ${({theme}) => theme.primary};
margin: 30px auto;
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
   font-size: 10px;
   display: flex;
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
    font-size: 10px;
    text-align: center;
}
`


export const Main3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: space-between; */
height: 500px;
width: 100%;
background-color: ${({theme}) => theme.text};
@media screen and (max-width: 960px){
  width: 100%;
  height: auto;
}
`

export const Container4 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
 
 h1 {
  text-align: center;
  font-family: inherit;
  padding: 20px;
  color: ${({theme}) => theme.primary1};
 }
 @media screen and (max-width: 960px){
  width: 100%;
  h1 {
  text-align: center;
  font-family: inherit;
  padding: 16px;
  color: ${({theme}) => theme.primary1};
 }
}
`


export const Container5 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 500px;

.box {
  height: 300px;
  width: 30%;
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  &:hover {
  border: 1px solid ${({theme}) => theme.primary1};
  transition: all ease-out .26s;
  transform: scale(1.1);
  }
}

.box h2 {
  font-size: 25px;
font-family: 'Roboto', sans-serif;
color: ${({theme}) => theme.primary};
text-align: center;
}

.box p {
  text-align: start;
  padding: 10px;
color: ${({theme}) => theme.primary};
}

@media screen and (max-width: 960px) {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  .box {
  border: 1px solid ${({theme}) => theme.primary1};
  height: 300px;
  width: 70%;
  margin: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
}

.box h2 {
  font-size: 20px;
font-family: 'Roboto', sans-serif;
color: ${({theme}) => theme.primary};
text-align: center;
}

.box p {
  text-align: start;
  padding: 15px;
  font-size: 10px;
font-family: 'Roboto', sans-serif;
color: ${({theme}) => theme.primary};
}
}

`