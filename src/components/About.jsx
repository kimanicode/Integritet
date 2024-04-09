import React from 'react'
import { GiMedicalPack } from "react-icons/gi";
import { FcDocument,FcBusinessman } from "react-icons/fc";



export const About = () => {
  return (
    <div className='bg-slate-200 px-10 py-5 w-full'>
        <h3 className='text-lagoon1 text-center font-semibold md:text-2xl'>What we Do</h3>
        <div className='flex flex-col md:flex-row justify-center gap-4 py-6'>

            <div className='bg-white p-5 rounded-2xl basis-1/4  shadow-xl hover:shadow-2xl   '>
              <p className='font-bold py-2 text-lagoon1'>Medical Errands</p>
              <span className='text-sky-500' ><GiMedicalPack size={24} /></span>

              <div className='bg-lagoon3 h-[2px] w-1/4 my-2 '></div>

              <p className='py-2 font-thin'>Go beyond the basics: While appointment scheduling and prescription pick-up are crucial we offer more.</p>
              <button className='bg-lagoon1 text-white p-2  hover:bg-lagoon1/50'>Learn More </button>
              
            </div>

            {/* Second div starts here */}

            <div className='bg-white p-5 rounded-2xl basis-1/4 shadow-xl hover:shadow-2xl  '>
              <p className='font-bold py-2 text-lagoon1'>Social Errands</p>
              <span ><FcBusinessman size={24} /></span>

              <div className='bg-lagoon3 h-[2px] w-1/4 my-2 '></div>

              <p className='py-2 font-thin'>Stress-free celebrations! Let us plan your dream event so you can be the perfect host.</p>
              <button className='bg-lagoon1 text-white p-2  hover:bg-lagoon1/50'>Learn More </button>
              
            </div>

            {/* Third div starts here  */}

            <div className='bg-white p-5 rounded-2xl basis-1/4 shadow-xl hover:shadow-2xl  '>
              <p className='font-bold py-2 text-lagoon1'>Official Errands/Documents</p>
              <span ><FcDocument size={24} /></span>

              <div className='bg-lagoon3 h-[2px] w-1/4 my-2 '></div>

              <p className='py-2 font-thin'>Cut through red tape. We handle your official errands efficiently and reliably</p>
              <button className='bg-lagoon1 text-white p-2 hover:bg-lagoon1/50'>Learn More </button>
              
            </div>
        </div>

    </div>
  )
}
