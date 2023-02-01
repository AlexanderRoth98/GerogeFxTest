import React from 'react'

const Header = () => {
  return (
    //<div className='flex bg-gradient-to-r from-dark_blue via-light_blue to-dark_blue' id='header'>
    <div id='header' className='flex py-4'>
      <div className='w-1/2'>
        <h1 className='text-2xl ml-4'>GeorgeFE Test</h1>
      </div>
      <div className='w-1/2'>
        <h1 className='text-2xl float-right mr-4 whitespace-nowrap'>Alexander Roth</h1>
      </div>
    </div>
  )
}

export default Header
