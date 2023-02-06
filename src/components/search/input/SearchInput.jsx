import { useState, React } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* Shows autocomplete search bar */

const SearchInput = ({ options, selectedOptions }) => {
  const [selected, setSelected] = useState([])
  const [defaultValue] = useState(selectedOptions)
  const navigate = useNavigate()

  const handleChange = (values) => {
    setSelected(values)
  }

  /*
  On search the router navigates to '/' followed by the search criteria.
  Each search criteria is split by '&'
  This causes the CurrencyPage to render again with the given params.
   */
  const onSearch = () => {
    let url = '/'
    if (selected.length > 0) {
      selected.forEach((selection, index) => {
        if (index === 0) url += selection
        else url += '&' + selection
      })
    }

    navigate(url)
  }

  return (
    <>
      <Autocomplete
        id='search-autocpmplet-area'
        onChange={(_event, values) => handleChange(values)}
        multiple
        size='small'
        fullWidth={true}
        options={options}
        defaultValue={defaultValue}
        sx={{
          bgcolor: '#ffffff',
          '& .MuiOutlinedInput-root': {
            borderRadius: '0',
            padding: '0',
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { border: '1px solid #eee' },
        }}
        renderInput={(params) => <TextField id='search-input-field' placeholder={selected.length === 0 ? 'Select one or more currencies...' : ''} {...params} />}
      />
      {/* Clicking on the icon will trigger search */}
      <span>
        <FontAwesomeIcon title='search-icon' id='search-icon' onClick={() => onSearch()} className='text-white text-2xl mt-2 cursor-pointer ml-2' icon={faMagnifyingGlass} />
      </span>
    </>
  )
}

export default SearchInput
