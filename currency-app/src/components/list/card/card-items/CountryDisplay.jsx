import React from 'react'
import { mapCurrencyToCountry } from '../../../../mapping/CurrencyMapping'
import Tooltip from '@mui/material/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const CountryDisplay = ({ currency }) => {
  let countries = mapCurrencyToCountry(currency)

  return countries.length == 1 ? (
    <div>{countries[0]}</div>
  ) : (
    <div>
      Several Countries
      <Tooltip
        title={countries.map((country) => {
          return <div>{country}</div>
        })}
        placement='right'
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              fontFamily: 'verdana',
              bgcolor: '#D27D2D',
              '& .MuiTooltip-arrow': {
                color: '#D27D2D',
              },
            },
          },
        }}
      >
        <FontAwesomeIcon className='text-blue ml-1' icon={faCircleInfo} />
      </Tooltip>
    </div>
  )
}

export default CountryDisplay
