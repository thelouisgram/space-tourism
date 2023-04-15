import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { logo } from '../assets/shared';

const Navbar = () => {
  const location = useLocation(); // Get the current location from react-router-dom

  return (
    <nav className='md:py-14 items-center md:pl-16 flex justify-between relative'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className='h-[1px] w-[460px] left-48 z-[3] bg-semiWhite absolute' />
      <div className='glass flex pl-28 pr-36 gap-12 py-6 tracking-[0.15rem] '>
        <NavLink exact to='/' activeClassName='active-link' className='flex gap-2 text-white font-BarlowCondensed items-center'>
          <h4 className='font-[600]'>00</h4>
          <h5 className='text-[14px]'>HOME</h5>
        </NavLink>
        <NavLink to='/destination' activeClassName='active-link' className='flex gap-2 text-white font-BarlowCondensed items-center'>
          <h4 className='font-[600]'>01</h4>
          <h5 className='text-[14px]'>DESTINATION</h5>
        </NavLink>
        <NavLink to='/crew' activeClassName='active-link' className='flex gap-2 text-white font-BarlowCondensed items-center'>
          <h4 className='font-[600]'>02</h4>
          <h5 className='text-[14px]'>CREW</h5>
        </NavLink>
        <NavLink to='/technology' activeClassName='active-link' className='flex gap-2 text-white font-BarlowCondensed items-center'>
          <h4 className='font-[600]'>03</h4>
          <h5 className='text-[14px]'>TECHNOLOGY</h5>
        </NavLink>
        {/* Add the active-link class for the current page */}
        {location.pathname === '' && <div className='active-link' />}
        {location.pathname === '/destination' && <div className='active-link' />}
        {location.pathname === '/crew' && <div className='active-link' />}
        {location.pathname === '/technology' && <div className='active-link' />}
      </div>
    </nav>
  );
};

export default Navbar;
