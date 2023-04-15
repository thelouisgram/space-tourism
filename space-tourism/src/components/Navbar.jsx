import React, {useState} from 'react'
import { logo, hamburger, close } from '../assets/shared'
import { Link } from 'react-router-dom'

const Navbar = () => { 
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu((menu) => !menu)
  }
  return (
    // Navbar
    <nav className='py-6 px-6 flex justify-between items-center ss:p-0 md:py-12  md:pl-16  md:relative'>
      {/* Logo container */}
      <div className='ss:pl-10 md:pl-0'>
        <img src={logo} className='h-[40px] ss:h-[50px] w-auto' alt="Logo" />
      </div>
      {/* Navbar Line */}
      <div className='hidden lg:flex h-[1px] w-[32%] left-44 z-[3] bg-semiWhite absolute'/>
      {/* > Tablet NavLinks */}
      <div className='glass hidden ss:flex ss:p-10 md:pl-32 md:pr-36 gap-12 md:py-6 tracking-[0.15rem] '>
          <Link to='/'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] hidden md:flex'>00</h4><h5 className='text-[14px]'>HOME</h5></div></Link>
          <Link to='/destination'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] hidden md:flex'>01</h4><h5 className='text-[14px]'>DESTINATION</h5></div></Link>
          <Link to='/crew'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] hidden md:flex'>02</h4><h5 className='text-[14px]'>CREW</h5></div></Link>
          <Link to='/technology'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600] hidden md:flex'>03</h4><h5 className='text-[14px]'>TECHNOLOGY</h5></div></Link>
      </div>
      {/* Menu button */}
      <div onClick={toggleMenu} className='flex ss:hidden cursor-pointer'>
        <img src={hamburger} className='w-[30px] h-auto '/>
      </div>
      {/* Mobile NavLinks */}
      {menu && <div className='h-[100vh] w-[250px] flex ss:hidden flex-col items-start gap-6 glass fixed top-0 right-0 p-6'>
          <div onClick={toggleMenu} className='mb-12 relative flex items-end cursor-pointer w-full'>
          <img src={close} className='absolute right-0 top-2 w-[30px] h-auto' />
          </div>
          <Link to='/'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600]'>00</h4><h5 className='text-[14px]'>HOME</h5></div></Link>
          <Link to='/destination'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600]'>01</h4><h5 className='text-[14px]'>DESTINATION</h5></div></Link>
          <Link to='/crew'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600]'>02</h4><h5 className='text-[14px]'>CREW</h5></div></Link>
          <Link to='/technology'><div className='flex gap-2 text-white font-BarlowCondensed items-center'><h4 className='font-[600]'>03</h4><h5 className='text-[14px]'>TECHNOLOGY</h5></div></Link>
      </div>}
    </nav>
  )
}

export default Navbar
