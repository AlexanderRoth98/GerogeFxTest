import React from 'react'

const Header = () => {
  return (
    <div id='header' className='flex py-4'>
      <div id='title-area' className='w-1/2'>
        <h1 id='title' className='text-2xl ml-4'>
          GeorgeFE Test
        </h1>
      </div>
      <div id='name-area' className='w-1/2'>
        <h1 id='name' className='text-2xl float-right mr-4 whitespace-nowrap'>
          Alexander Roth
        </h1>
      </div>
    </div>
  )
}

export default Header
