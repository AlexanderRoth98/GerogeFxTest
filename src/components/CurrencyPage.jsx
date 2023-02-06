import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './header/Header'
import CurrencyList from './list/CurrencyList'
import SearchArea from './search/SearchArea'
import { fetchCurrencyList } from './service/CurrencyService'

/* This is the page for '/' path. The app has only one page */

const CurrencyPage = () => {
  let { currencyFilter } = useParams() /* Get url params */
  const [data, setData] = useState()
  const [options, setOptions] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCurrencyList(fetchCallBack, currencyFilter) /* Fetches data from the service */
  }, [currencyFilter])

  const fetchCallBack = (currencyList, selectionList) => {
    setData(currencyList)
    setOptions(selectionList) /* These are the options that can be chosen from the select bar */
    setLoading(false) /* Seting loading to false will lead to the rendering of the main content */
  }

  /* Data fetching is asynchronous. While the data is fetching the loading message is returned. */

  if (loading) {
    return <div className='text-center mt-5'>Fetching data...</div>
  }

  return (
    <div id='currency-page'>
      <Header />
      <SearchArea options={options} selectedOptions={currencyFilter} />

      {/* Check that data is not null or undefined and then display the list of currencies.
          In case data is returning with an error display the error message.  */}

      {data && !data.error ? (
        <CurrencyList data={data} />
      ) : (
        <div id='no-data-message' className='text-center'>
          Error: {data.error.message}
        </div>
      )}
    </div>
  )
}

export default CurrencyPage
