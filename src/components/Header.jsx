import React from 'react'
import { useState } from 'react';
import Logo from './../assets/images/Logo.png'
import { CiHome, CiSearch, CiStar, CiPlay1, CiDesktop, CiMenuKebab } from "react-icons/ci";
import HeaderItems from './HeaderItems';

function Header() {
  const [toggle, setToggle]=useState(false);
  const menu = [
    { name: 'Home', icon: CiHome },
    { name: 'Search', icon: CiSearch },
    { name: 'Watchlist', icon: CiStar },
    { name: 'Movies', icon: CiPlay1 },
    { name: 'Series', icon: CiDesktop },
  ];
  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-8 items-center'>
        <img src={Logo} className='w-[50px] h-[50px] md:w-[70px] md:h-[70px] m-3 object-cover'/>
        <div className='hidden md:flex gap-8'> {/*md: medium breakpoint, corresponds to min width of 768px.*/}
          {menu.map((item)=>(
            <HeaderItems Name={item.name} Icon={item.icon}/>
          ))}
        </div>
        <div className='flex md:hidden gap-8'>
          {menu.map((item, index)=>index<3&&(
            <HeaderItems Name={''} Icon={item.icon}/>
          ))}
        </div>
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <HeaderItems Name={''} Icon={CiMenuKebab}/>
            {toggle ? <div className='absolute mt-3 p-3 px-5 border border-slate-600 rounded-lg bg-slate-950'>
              {menu.map((item, index)=>index>2&&(
              <HeaderItems Name={item.name} Icon={item.icon}/>
              ))}
            </div> : null}
        </div>
      </div>
      <img src="/pfp.png" alt="Profile" className='w-[40px] h-[40px] m-3 object-cover rounded-full hover:border-2 border-slate-200 duration-75 ease-in'/>
    </div>
  )
}

export default Header