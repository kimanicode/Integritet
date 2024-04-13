import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import { Link } from "react-router-dom"



const Header = () => {
  const [nav ,setNav] = useState(true)


  function handleClick(){
    setNav(!nav)
  }
  return (
    <div className="py-6 px-10 flex justify-between  bg-slate-200 top-0 z-10 relative items-center">
        <div className="text-lagoon1 font-bold uppercase items-center"><Link to='/'>Integritet</Link></div>
        <div>
            <ul className="md:flex gap-3 text-lagoon1 hidden">
                <li className="hover:text-lagoon3 cursor-pointer "><Link to='/'>Home</Link></li>
                
                <li className="hover:text-lagoon3 cursor-pointer "><Link to='about-us'>About Us</Link></li> 
                <li className="hover:text-lagoon3 cursor-pointer "><Link to='services'>Services</Link></li>
                <li className="hover:text-lagoon3 cursor-pointer "><Link to='contact-us'>Contact Us</Link></li> 
            </ul>
        </div>

        <div className="text-lagoon1 hidden md:block">
            Call us: +254-708-193-940
        </div>

        <div className="md:hidden px-4 text-lagoon1 flex justify-center items-center " onClick={handleClick}>
            {nav ?<BiMenu size={40} /> :  <BiX size={40} />}

          </div>


          {!nav &&   
          //  <div className='relative bg-lagoon1 w- py-10 '>
            <ul className='absolute  top-0 left-0 flex flex-col gap-4 bg-lagoon1  px-10  w-full h-dvh my-14'>

                  <li className="hover:text-celadon py-5  text-xl text-white border-b-slate-300 border-b-[1px]" onClick={handleClick}><Link to='/'>Home</Link></li>

                  <li className="hover:text-celadon py-5  text-xl text-white  border-b-[1px]" onClick={handleClick}><Link to='/about-us'>About Us</Link></li>

                  <li className="hover:text-celadon py-5  text-xl text-white  border-b-[1px]" onClick={handleClick}><Link to='/services'>Services</Link></li>

                  <li className="hover:text-celadon  py-5  text-xl text-white  border-b-[1px]" onClick={handleClick}><Link to='/contact-us'>Contact Us</Link></li>


            </ul>


          // </div>
            
            
            
          }






    </div>
  )
}

export default Header