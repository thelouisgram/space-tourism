import React, {useState} from 'react'
import Navbar from '../components/Navbar'

const Destination = () => {
  const [currentSlide, setCurrentSlide] = useState(0)


  return (
    <section id='destination'>
        <Navbar />
        {/* Destination content */}
          <div className='flex gap-6 tracking-[0.25rem] md:pt-8 md:pl-44'>
            <h3 className='font-BarlowCondensed text-[24px] font-bold text-semiWhite'>01</h3>
            <h3 className='font-BarlowCondensed text-[24px] text-white '>PICK YOUR DESTINATION</h3>
          </div>
        {/* Left Div */}
        <div className='flex '>
          <div></div>
        </div>
    </section>
  )
}

export default Destination
