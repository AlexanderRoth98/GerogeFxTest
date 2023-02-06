import { React } from 'react'

import SearchInput from './input/SearchInput'
import SearchInfo from './input/SearchInfo'

/* Container of the search elements */

const SearchArea = ({ options, selectedOptions }) => {
  /* Parse the url/search params to an array */
  let selected = selectedOptions ? selectedOptions.toUpperCase().split('&') : []

  /* 
   Filter out any currencies that are not in the options list.
   This may occure when deeplinking unavailable currencies. 
   */
  selected = selected.filter((element) => options.includes(element))

  /* Remove duplicates */
  selected = Array.from(new Set(selected))

  return (
    <div id='search-bar' className='flex mx-auto w-3/4 py-2 sticky top-0 bg-blue justify-center'>
      {options && (
        <>
          <h2 id='search' className='text-xl mr-2 mt-1'>
            Search
          </h2>
          <SearchInput options={options} selectedOptions={selected} />
          <SearchInfo iconStyle='ml-2 mt-2' />
        </>
      )}
    </div>
  )
}

export default SearchArea
