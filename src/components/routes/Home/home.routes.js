import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ButtonContainer, Container, Container1, Container2, Container3, Container4, Container5, Main, Main1, Main3, NavLink, Wrapper } from './home.styles'
import map from '../../../assests/images/map1.jpg'
const Home = () => {
    useEffect(() =>{
        Aos.init({ duration: 2000 })
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
     <div className='box' data-aos="fade-right">
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
     <div className='box' data-aos="fade-left">
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
    <div className='box' data-aos="fade-right">
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
        </Container5>
       </Main3>
   </Wrapper>
  )
}

export default Home;