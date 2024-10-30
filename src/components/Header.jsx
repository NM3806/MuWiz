import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/images/Logo.png';
import { CiHome, CiSearch, CiStar, CiPlay1, CiDesktop, CiMenuKebab } from "react-icons/ci";
import HeaderItems from './HeaderItems';

function Header() {
  const [toggle, setToggle]=useState(false);
  const menu = [
    { name: 'Home', icon: CiHome, path: '/' },
    { name: 'Search', icon: CiSearch, path: '/search' },
    { name: 'Watchlist', icon: CiStar, path: '/watchlist' },
    { name: 'Movies', icon: CiPlay1, path: '/movies' },
    { name: 'Series', icon: CiDesktop, path: '/series' },
  ];

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-8 items-center'>
        <img src={Logo} className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] m-3 object-cover' alt="Logo" />
        <div className='hidden md:flex gap-8'> {/*md: medium breakpoint, corresponds to min width of 768px.*/}
          {menu.map((item) => (
            <Link to={item.path} key={item.name}> {/* Wrap HeaderItems in Link */}
              <HeaderItems Name={item.name} Icon={item.icon} />
            </Link>
          ))}
        </div>

        <div className='flex md:hidden gap-8'>
          {menu.map((item, index) => index < 3 && (
            <Link to={item.path} key={item.name}> {/* Wrap HeaderItems in Link */}
              <HeaderItems Name={''} Icon={item.icon} />
            </Link>
          ))}
        </div>
        
        <div className='md:hidden' onClick={() => setToggle(!toggle)}>
          <HeaderItems Name={''} Icon={CiMenuKebab} />
          {toggle ? (
            <div className='absolute mt-3 p-3 px-5 border border-slate-600 rounded-lg bg-slate-950'>
              {menu.map((item, index) => index > 2 && (
                <Link to={item.path} key={item.name}> {/* Wrap HeaderItems in Link */}
                  <HeaderItems Name={item.name} Icon={item.icon} />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <img src="/pfp.png" alt="Profile" className='w-[40px] h-[40px] m-3 object-cover rounded-full hover:border-2 border-slate-200 duration-75 ease-in' />
    </div>
  );
}

export default Header;