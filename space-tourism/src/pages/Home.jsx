import React from 'react'
import Navbar from '../components/Navbar'
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    // Home page 
    <section id='home' className='w-full'>
      {/* Navbar components */}
      <Navbar />
      {/* Homepage content */}
      <div className='flex flex-col text-center justify-center items-center md:text-left  md:items-center md:flex-row md:px-44 md:pt-24 '>
        {/* Left Div */}
        <div className='w-full px-6 my-20 md-px-0 md:pb-24 md:m-0 ss:my-32'>
          <h3 className='text-[18px] ss:text-[26px] font-BarlowCondensed text-babyBlue tracking-[0.3rem]'>SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className='text-[80px] font-Bellefair text-white ss:text-[140px]'>SPACE</h1>
          <p className='md:w-[470px] text-base ss:leading-[1.9rem] md:leading-0 ss:text-[17px] md:text-[16px] font-Barlow md:font-BarlowCondensed tracking-[0.1rem] text-babyBlue'>
            Let’s face it; if you want to go to space, you might 
            as well <br className='ss:flex hidden'/> genuinely go to outer space and not hover kind 
            of on the <br className='md:flex hidden' />edge of <br className='ss:flex md:hidden hidden'/> it. Well sit back, and relax because 
            we’ll give you<br className='md:flex hidden' /> a truly out of <br className='ss:flex md:hidden hidden' />  this world experience!
          </p>
        </div>
        {/* Right Div */}
        <div className=' flex flex-1 flex-row items-center cursor-pointer justify-end mb-24 ss:mb-48 md:mb-0'>
          <Link to='/destination'><div className='bg-white rounded-full h-[200px] w-[200px] 
          md:h-[250px] md:w-[250px] flex items-center justify-center hover:bg-opacity-75
          hover:scale-125 transform transition-all duration-500'>
            <h2 className='font-Bellefair font-normal text-midnightBlue text-[28px]'>EXPLORE</h2>
</div>
</Link>
        </div>
      </div>
    </section>
  )
}

export default Home
