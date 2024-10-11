import React from 'react'

function HeaderItems({Name, Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer
    hover:underline underline-offset-8 mb-2'>
      <Icon/>
      <h3 className=''>{Name}</h3>
    </div>
  )
}

export default HeaderItems