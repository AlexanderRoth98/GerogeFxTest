import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@mui/material/Tooltip'

/* Shows indications to how to use search through a tooltip */
const SearchInfo = ({ iconStyle }) => {
  return (
    <>
      <Tooltip
        id='search-tooltip'
        title={
          <span>
            Select one or more currencies from the selection list.
            <br />
            To filter the options you can type in the box.
            <br />
            To search click on the icon to the left.
            <br />
            To reset the list clear all selections and search.
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
        {/* Hovering over the icon will show the tooltip */}
        <span>
          <FontAwesomeIcon title='search-info-icon' id='search-info' className={`text-white text-2xl ${iconStyle}`} icon={faCircleInfo} />
        </span>
      </Tooltip>
    </>
  )
}

export default SearchInfo
