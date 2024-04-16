import React from 'react'
import { LuQuote } from "react-icons/lu";
import picha from '../assets/kim.jpg'


const Testimonials = () => {
  return (
    <div className='w-full px-10 bg-slate-200 flex items-center py-10 justify-between gap-3 md:flex-row flex-col'>
        <div className='basis-1/2'>
            <p className='uppercase text-lagoon1 font-bold bg-lagoon3/50 p-[2px] w-1/4'>testimonials</p>
            <h3 className='text-4xl py-3 font-semibold'>Our Happy Customers</h3>
            <span className='py-3 font-thin'>We always leave an indelible mark on our customers due to our stellar service delivery.</span>
        </div>

        <div className='basis-1/2'>
            
            <div className='bg-white p-8 rounded shadow-2xl relative flex justify-center font-thin'>
                <span className=' absolute text-lagoon1 top-[-10px] '> 
                <LuQuote size={25} />

                </span>
                Integritet has been a lifesaver for me! As a busy professional, I often find myself overwhelmed with work and personal tasks. Their team is reliable, efficient, and takes care of all my errands seamlessly. I highly recommend their services to anyone in need of a helping hand.

                <img src={picha} className='w-12 h-12 rounded-full absolute bottom-[-20px]' />
            </div>

        </div>
    </div>
  )
}

export default Testimonials