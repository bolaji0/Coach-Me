import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ButtonContainer, Container, Container1, Container2, Container3, Container4, Container5, Footer, Main, Main1, Main3, NavLink, Wrapper,ImageCon } from './home.styles'
import map from '../../../assests/images/map1.jpg'
import logo from '../../../assests/images/CoachMe logo.png'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
// import { ImageCon } from '../../navigation/navigation.styles'

const Home = () => {
    useEffect(() =>{
        Aos.init({ duration: 1000 })
    },[])
  return (
   <Wrapper>
    <Main>
    <Container>
        <div className='text-holder' data-aos="fade-up">
      <h1>
        Bridge the gap between tutors and students
      </h1>
        </div>
        <div className='holder' data-aos="fade-up">
            <p>
                helps you connect to tutors around the world, match you with 
                the best based on your personal desires and public reviews.
            </p>
        </div>
        <ButtonContainer data-aos="fade-up">
             <NavLink to={'/create-account'}>
                Get Started
             </NavLink>
            </ButtonContainer>
    </Container>

    <Container1>
     <img src={map} alt='map'/>
    </Container1>
    </Main>
    
     <Main1>
        <Container2>
        <div className='text-holder' data-aos="fade-up">
      <h1>
        Build yourself in any feild with an expert tutor
      </h1>
        </div>
        <div className='holder' data-aos="fade-up">
            <p>
                helps you connect to tutors around the world, match you with 
                the best based on your personal desires and public reviews.
            </p>
        </div>
        <ButtonContainer data-aos="fade-up">
             <NavLink to={'/create-account'}>
                Get Started
             </NavLink>
            </ButtonContainer>
        </Container2>
        <Container3>
            <div className='course-holder'>
            <div data-aos="fade-up">affiliate marketing</div>
            <div data-aos="fade-up">web development</div>
            <div data-aos="fade-up">mobile development</div>
            <div data-aos="fade-up">fashion design</div>
            </div>
        </Container3>
     </Main1>

       <Main3>
        <Container4>
          <h1 data-aos="fade-up">Solutions</h1>
        </Container4>
        <Container5>
     <div className='box' data-aos="fade-up">
        <h2>To tutors</h2>
        <p>
       serve as a means to make revenue for tutors who are
       in need of jobs,make quick cash by getting students
        who are interested in their services.
        </p>
        <NavLink to={'/about-us'}>
                learn more
             </NavLink>
     </div>
     <div className='box' data-aos="fade-up">
     <h2>To students</h2>
        <p>
       serve as a means to make revenue for tutors who are
       in need of jobs,make quick cash by getting students
        who are interested in their services.
        </p>
        <NavLink to={'/about-us'}>
                learn more
             </NavLink>
    </div>
    <div className='box' data-aos="fade-up">
    <h2>To patners</h2>
        <p>
       serve as a means to make revenue for tutors who are
       in need of jobs,make quick cash by getting students
        who are interested in their services.
        </p>
        <NavLink to={'/about-us'}>
                learn more
             </NavLink>
     </div>
        </Container5>
       </Main3>
       <Footer>
         <div className='container'>
         <ImageCon>
          <Link to={'/'}>
             <img src={logo} alt=''/>
          </Link>
        </ImageCon>
    <div className='link-container'>
      <h3>Quick Links</h3>
     <div>
       <Link to={'/about-us'}>
       About us
       </Link>
       <Link to={'/partners'}>
       Partners
       </Link>
       <Link to={'/faqs'}>
       Faqs
       </Link>
       <Link to={'pricing'}>
       Pricing
       </Link>
     </div>
    </div>
          <div className='icon-container'>
            <h3>Socials</h3>
              <AiFillFacebook size={'2rem'} color={'rgb(92, 134, 209)'}/>
              <AiOutlineTwitter size={'2rem'} color={'rgb(92, 134, 209)'}/>
              <AiFillInstagram size={'2rem'} color={'rgb(92, 134, 209)'}/>
          </div>
         </div>
       </Footer>
   </Wrapper>
  )
}

export default Home;