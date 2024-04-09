import React from 'react'
import heroImg from '../assets/woman.jpg'

const Hero = () => {
  return (
    <div className='w-full px-10 flex justify-between   py-4   md:flex-row flex-col'>
        <div className='flex flex-col md:py-24 '>
            <p className='text-lagoon2'>WELCOME</p>
            <p className='text-lagoon1 text-5xl font-bold py-3 '>Convenience . <span className='text-lagoon3 shadow-md'>Reliability.</span><br /> Peace of mind</p>
            <p className=' text-lagoon2 '>Simplify Your Life with Integritet</p>

            <div className='py-6'>
                <button className='p-3 bg-lagoon3 rounded text-lagoon1 font-semibold text-white shadow-xl'>Get Started</button>
            </div>  

        </div>
        <div className='basis-2/4'>
            <img src={heroImg} alt="" className="w-screen shadow-2xl md:h-3/4 h-[200px] rounded-xl" />
        </div>
    </div>
  )
}

export default Hero