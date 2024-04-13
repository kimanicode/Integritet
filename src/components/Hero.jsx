import heroImg from '../assets/woman.jpg'

const Hero = () => {
  return (
    <div className='container px-10 flex justify-between  bg- py-4   md:flex-row flex-col'>
        <div className='flex flex-col md:py-24 '>
            <p className='text-lagoon2'>WELCOME</p>
            <p className='text-lagoon1 md:text-5xl text-3xl font-bold py-3 '>Convenience . <span className='text-lagoon3 shadow-md'>Reliability.</span><br /> Peace of mind</p>
            <p className=' text-lagoon2 '>Simplify Your Life with Integritet</p>

            <div className='py-6'>
                <button className='py-3 px-6 bg-lagoon3 hover:bg-lagoon3/50  rounded text-lagoon1 font-semibold text-white shadow-xl hover:text-lagoon2'>Request Errand</button>
            </div>  

        </div>
        <div className='basis-2/4'>
            <img src={heroImg} alt="" className="w-screen shadow-2xl md:h-[80%] h-[200px] rounded-xl" />
        </div>
    </div>
  )
}

export default Hero