import React from 'react'

const Header = ({ title, icon }) => {
  return (
    <div className='flex mt-8 gap-4 '>
      {icon}
      <p className='text-darkBlue text-3xl mb-8 font-bold flex'>
        {title}
      </p>
    </div>
  )
}

export default Header
