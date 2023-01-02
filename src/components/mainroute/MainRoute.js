import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../navigation/navigation'
import Home from '../routes/Home/home.routes'
import About from '../routes/About/about.routes'
import Patners from '../routes/patners/patners.routes'
import Faqs from '../routes/Faqs/faq.routes'
import Pricing from '../routes/Pricing/pricing.routes'
import Signin from '../routes/Sigin/signin.routes'
import Signup from '../Signup/signup.routes'

const MainRoute = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path='/about-us' element={<About />}/>
    <Route path='/partners' element={<Patners />}/>
    <Route path='/faqs' element={<Faqs />}/>
    <Route path='/pricing' element={<Pricing />} />
    </Route>
    <Route path='/create-account' element={<Signin />}/>
    <Route  path='/create-account/signup' element={<Signup />}/>
 </Routes>
  )
}

export default MainRoute