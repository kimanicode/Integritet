import Header from './components/Header'
import Hero from './components/Hero'
import { About } from './components/About'
import WhyUs from './components/WhyUs'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'


import {BrowserRouter as Router , Routes ,Route}from "react-router-dom";
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'


function App() {

  return (

    <Router>
      <div className=''>
        <Header/>
        <Routes>
            <Route path='/'>
              <Route path='/' element={
                  <>     
                      <Hero/>
                      <About/>
                      <WhyUs/>
                      <HowItWorks/>
                      <Testimonials/>
                  </>   } exact />

            </Route>
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<Contact />} />
            </Routes>
       
        <Footer/>
      </div>
    </Router>  
  )
}

export default App
