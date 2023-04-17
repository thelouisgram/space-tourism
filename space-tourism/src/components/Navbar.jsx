import React, { useState } from 'react'
import { logo, hamburger, close } from '../../public/assets/shared'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu((menu) => !menu)
  }
  return (
    // Navbar
    <nav className='py-6 px-6 flex justify-between items-center ss:pl-10 ss:p-0 md:py-12  md:pl-16  md:'>
      {/* Logo container */}
      <div className=' md:pl-0'>
        <img src={logo} className='h-[40px] ss:h-[50px] w-auto' alt="Logo" />
      </div>
      {/* > Tablet NavLinks */}
      <div className='glass hidden ss:flex ss:p-10 md:pl-32 md:pr-36 gap-12 ss:py-7 tracking-[0.15rem] '>
        <Link to='/'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px] hidden md:flex'>00</h4><h5 className='text-[17px]'>HOME</h5></div></Link>
        <Link to='/destination'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px] hidden md:flex'>01</h4><h5 className='text-[17px]'>DESTINATION</h5></div></Link>
        <Link to='/crew'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px] hidden md:flex'>02</h4><h5 className='text-[17px]'>CREW</h5></div></Link>
        <Link to='/technology'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px] hidden md:flex'>03</h4><h5 className='text-[17px]'>TECHNOLOGY</h5></div></Link>
      </div>
      {/* Menu button */}
      <div onClick={toggleMenu} className='flex ss:hidden cursor-pointer'>
        <img src={hamburger} className='w-[30px] h-auto ' />
      </div>
      {/* Mobile NavLinks */}
      {menu && <div className='h-[100vh] w-[250px] flex ss:hidden flex-col z-[10]
      items-start gap-6 glass fixed top-0 right-0 p-6'>
        <div onClick={toggleMenu} className='mb-12 relative flex items-end cursor-pointer w-full'>
          <img src={close} className='absolute right-0 top-2 w-[30px] h-auto' />
        </div>
        <Link to='/'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px]'>00</h4><h5 className='text-[17px]'>HOME</h5></div></Link>
        <Link to='/destination'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px]'>01</h4><h5 className='text-[17px]'>DESTINATION</h5></div></Link>
        <Link to='/crew'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px]'>02</h4><h5 className='text-[17px]'>CREW</h5></div></Link>
        <Link to='/technology'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] text-[17px]'>03</h4><h5 className='text-[17px]'>TECHNOLOGY</h5></div></Link>
      </div>}
    </nav>
  )
}

export default Navbar
