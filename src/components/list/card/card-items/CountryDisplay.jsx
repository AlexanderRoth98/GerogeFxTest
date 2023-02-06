import React from 'react'
import { mapCurrencyToCountry } from '../../../../mapping/CurrencyMapping'
import Tooltip from '@mui/material/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

/* Show the country name of the currency.*/

const CountryDisplay = ({ currency }) => {
  let countries = mapCurrencyToCountry(currency) /* The mapper returns an array */

  /* 
  If only one country was found display the plain text.
  If several countries show a tooltip with a list of all countries. 
  */

  return countries.length === 1 ? (
    <div id='country-name' className='text-[14px]'>
      {countries[0]}
    </div>
  ) : (
    <div id='country-names'>
      Several Countries
      <Tooltip
        id='country-tooltip'
        title={countries.map((country, index) => {
          return (
            <div id={`country-entry-${index}`} key={country}>
              {country}
            </div>
          )
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
        {/* Hovering over the icon will show the tooltip */}
        <span>
          <FontAwesomeIcon title='info-icon' id='country-info' className='text-blue ml-1' icon={faCircleInfo} />
        </span>
      </Tooltip>
    </div>
  )
}

export default CountryDisplay
