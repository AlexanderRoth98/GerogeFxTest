import { React } from 'react'

import SearchInput from './input/SearchInput'
import SearchInfo from './input/SearchInfo'

const SearchArea = ({ options, selectedOptions }) => {
  return (
    <div id='search-bar' className='flex mx-auto w-3/4 py-2 sticky top-0 bg-blue justify-center'>
      {options && (
        <>
          <h2 id='search' className='text-xl mr-2 mt-1'>
            Search
          </h2>
          <SearchInput options={options} selectedOptions={selectedOptions} />
          <SearchInfo iconStyle='ml-2 mt-2' />
        </>
      )}
    </div>
  )
}

export default SearchArea
