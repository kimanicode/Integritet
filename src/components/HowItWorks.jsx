import work from '../assets/work.jpg'



const HowItWorks = () => {
  return (
    <div className='px-10 container py-12'>
        <h3 className='uppercase text-lagoon1 font-bold '>How It Works</h3>
        <div className='flex justify-between md:flex-row flex-col '>
          <div className='py-4'>
              <p className='text-4xl font-semibold'>Our Business Process Road</p>
          <div className='py-6'>
            <div className='flex md:flex-row flex-col gap-4 '>
                <div className='basis-1/3 text-4xl hidden md:block'>
                 <p className='h-full'>01.</p>
                </div>
                <div className=' flex flex-col justify-start basis-2/3'>
                  <p className='font-semibold text-lagoon2 text-2xl '>Request a Service</p>
                  <ol  className='font-thin list-disc'>
                    <li>Request a service easily on our online platform </li>
                    <li>Service Selection</li>
                    <li>Specify any special instructions to tailor the service to your needs</li>
                  </ol>
                </div>
            </div>

            {/* div 2 */}

            <div className='flex md:flex-row flex-col '>
                <div className='basis-1/3 text-4xl hidden md:block'>
                 <p className='h-full'>02.</p>
                </div>
                <div className=' flex flex-col justify-start basis-2/3'>
                  <p className='font-semibold text-lagoon2 text-2xl '>Task Asignment and Execution</p>
                  <ol  className='font-thin list-disc'>
                    <li>Upon receiving the request we process it.</li>
                    <li>We carry out the requested tasks adhering to any special instructions provided.</li>
                    <li>Customers receive real time updates and notifications throuoght the process.</li>
                  </ol>
                </div>
            </div>

            {/* div 3 */}

            <div className='flex md:flex-row flex-col '>
                <div className='basis-1/3 text-2xl hidden md:block'>
                 <p className='h-full'>03.</p>
                </div>
                <div className=' flex flex-col justify-start basis-2/3'>
                  <p className='font-semibold text-lagoon2 text-2xl '>Delivery </p>
                  <ol  className='font-thin list-disc'>
                    <li>Timely delivery/completion </li>
                    <li>A final quality check is conducted to ensure that all requirements have been met.</li>
                    <li>Feedback: clients are encouraged to provide feedback on their experience</li>
                  </ol>
                </div>
            </div>
          </div>


          </div>


          <div className='basis-1/2'>
            <img src={work} className='rounded-t-full shadow-lg h-full' />

          </div>
        </div>
    </div>
  )
}

export default HowItWorks
