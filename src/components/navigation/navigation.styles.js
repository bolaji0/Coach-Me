import styled from "styled-components"; 
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
width: 100%;
background-color: ${({theme}) => theme.text};
height: 90px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
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

export const ImageCon = styled.div`
height: 60px;
width: 60px;
display: flex;
justify-content: center;
align-items: center;

img {
    width: 100%;
    height: 100%;
}
`;


export const LinkContainer = styled.div`
width: 700px;
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
/* background-color: black; */
padding: 20px;
/* background-color: ${({theme}) => theme.text}; */
@media screen and (max-width:960px){
   height: 100vh;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin-top: 380px;
   background-color: ${({theme}) => theme.text};
   position: relative;
   top: ${({open}) => open ? '0px' : '-1000px'};
   transition: all ease-out .5s;
   z-index: 999;
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


export const HamBurgerContainer = styled.div`
@media screen and (min-width: 960px) {
    display:none;
}
@media screen and (max-width:960px){
    /* border: 1px solid red; */
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

`



