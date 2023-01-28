import React from 'react'

const SearchBar = () => {
  return (
    <div id='search-bar' className='flex py-2 sticky top-0 bg-blue'>
      <h2 className='text-2xl ml-4'>Search</h2>
      <input className='w-4/5 ml-6' type='text' id='fname' name='fname' />
    </div>
  )
}

export default SearchBar
