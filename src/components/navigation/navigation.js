import React,{useState} from 'react'
import { ButtonContainer, HamBurgerContainer, ImageCon, LinkContainer, NavLink, Wrapper } from './navigation.styles'
import logo from '../../assests/images/CoachMe logo.png'
import { AiOutlineBars,AiOutlineClose } from 'react-icons/ai'
import { Link,Outlet } from 'react-router-dom'

const Navigation = () => {
    const [toggleNavbar,setToggleNavbar] = useState(false)

    const handleClick = () => {
        if(toggleNavbar) {
            setToggleNavbar(false)
        }else {
            setToggleNavbar(true)
    }
    }
  

  return (
    <>
    <Wrapper>
        <ImageCon>
          <Link to={'/'}>
             <img src={logo} alt=''/>
          </Link>
        </ImageCon>
       <LinkContainer open={toggleNavbar}>
       {
         LinksArray.map(({id,to,name}) =>(
            <NavLink to={to} key={id} onClick={handleClick}>
                {name}
            </NavLink>
         ))
       }
      {
         SecondaryLinks.map(({id,name,to}) =>(
            <ButtonContainer key={id}>
             <NavLink to={to}>
                {name}
             </NavLink>
            </ButtonContainer>
         ))
      }
       </LinkContainer>
    <HamBurgerContainer onClick={handleClick}>
        {
            toggleNavbar ? <AiOutlineClose color='rgb(92, 134, 209)' size={'2rem'} /> : <AiOutlineBars color='rgb(92, 134, 209)' size={'2rem'} />
         }
    </HamBurgerContainer>
    </Wrapper>
    <Outlet />
    </>
  )
}


const LinksArray =[
    {
        to: '/about-us',
        name: 'About Us',
        id: 0
    },
    {
     to: '/partners',
     name: 'Partners',
     id: 1
    },
    {
        to: '/faqs',
        name: 'Faqs',
        id: 2
    },
    {
        to: '/pricing',
        name: 'Pricing',
        id: 3
    }
]

const SecondaryLinks = [
    {
        to: '/create-account',
        name: 'Login',
        id: 0
    },
    {
        to: '/create-account',
        name: 'Sign Up',
        id: 1
    }
]







export default Navigation