import { useState, React } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'

const SearchBar = ({ options, selectedOptions }) => {
  const [selected, setSelected] = useState([])
  const [defaultValue, setDefaultValue] = useState(selectedOptions ? selectedOptions.toUpperCase().split('&') : [])
  const history = useHistory()

  const handleChange = (values) => {
    setSelected(values)
  }

  const onSearch = () => {
    let url = '/'
    if (selected.length > 0) {
      selected.forEach((selection, index) => {
        if (index === 0) url += selection
        else url += '&' + selection
      })
    }

    history.push(url)
  }

  return (
    <div id='search-bar' className='flex mx-auto w-3/4 py-2 sticky top-0 bg-blue justify-center'>
      {options && (
        <>
          <h2 className='text-xl mr-2 mt-1'>Select</h2>
          <Autocomplete
            onChange={(_event, values) => handleChange(values)}
            multiple
            size='small'
            id='todo'
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
            renderInput={(params) => <TextField placeholder={selected.length == 0 ? 'Select multiple currencies...' : ''} {...params} />}
          />

          <FontAwesomeIcon onClick={() => onSearch()} className='text-white text-2xl mt-2 cursor-pointer ml-2' icon={faMagnifyingGlass} />

          <Tooltip
            title={
              <span className=''>
                Select one or more currencies from the selection list.
                <br />
                To filter the options you can type in the box.
                <br />
                To search click on the icon to the left.
                <br />
                To reset the list remove all selections and search.
              </span>
            }
            placement='bottom'
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  width: 150,
                  fontFamily: 'verdana',
                  bgcolor: '#D27D2D',
                  '& .MuiTooltip-arrow': {
                    color: '#D27D2D',
                  },
                },
              },
            }}
          >
            <FontAwesomeIcon className='text-white mt-2 text-2xl ml-2' icon={faCircleInfo} />
          </Tooltip>
        </>
      )}
    </div>
  )
}

export default SearchBar
