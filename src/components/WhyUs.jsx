import React from 'react'
import vectorImage from '../assets/8817021.jpg'
import { AiOutlineCheck } from "react-icons/ai";


const WhyUs = () => {
  return (
    <div className=' px-10 py-2 w-full'>
        <h3 className='text-lagoon1 text-center font-semibold md:text-2xl'>Why Choose Us</h3>

        <div className='flex md:flex-row flex-col  py-8 '>
            <div className='basis-1/2'>
                <img src={vectorImage} alt="" className='w-screen  md:h-3/4 h-[200px] '  />

            </div>


            <div className='basis-1/2 '>
                <h2 className='font-semibold text-xl text-lagoon2 '>Your Time is Valuable. Let Us Help You Reclaim It

                 </h2>

                <p className='font-thin py-4'>We are your one-stop shop for getting things done. We understand that your time is precious, we're here to take the burden errands off your shoulders. Here's why we are the perfect partner for you</p>

                <div className='flex  flex-wrap'> 

                  <div className='flex gap-2 p-4 basis-1/2'>
                    <span className='text-green-500'>
                      <AiOutlineCheck size={40}/>
                      </span>
                    <p className='text-lagoon3 font-semibold'>Unmatched Convenience</p>
                  </div>

                   {/* 22 */}

                  <div className='flex gap-2 p-4 basis-1/2 '>
                    <span className='text-green-500'>
                      <AiOutlineCheck size={40}/>
                      </span>
                    <p className='text-lagoon1 font-semibold'>Customer Satisfaction is Our Priority</p>
                  </div>

                   {/* 33 */}

                   <div className='flex gap-2 p-4 basis-1/2'>
                    <span className='text-green-500'>
                      <AiOutlineCheck size={40}/>
                      </span>
                    <p className='text-lagoon1 font-semibold'>Personalized Attention</p>
                  </div>

                   {/* 44 */}

                   <div className='flex gap-2 p-4 basis-1/2'>
                    <span className='text-green-500'>
                      <AiOutlineCheck size={40}/>
                      </span>
                    <p className='text-lagoon3 font-semibold'>Peace of Mind Guaranteed</p>
                  </div>

                   {/* 55 */}

                   <div className='flex gap-2 p-4 basis-1/2'>
                    <span className='text-green-500'>
                      <AiOutlineCheck size={40}/>
                      </span>
                    <p className='text-lagoon3 font-semibold'>Reliability You Can Trust</p>
                  </div>

                   {/* 66 */}

                   <div className='flex gap-2 p-4 basis-1/2'>
                    <span className='text-green-500'>
                      <AiOutlineCheck size={40}/>
                      </span>
                    <p className='text-lagoon1 font-semibold'>Improved Efficiency</p>
                  </div>




                </div>

               

                
      


            </div>
        </div>

    </div>
  )
}

export default WhyUs