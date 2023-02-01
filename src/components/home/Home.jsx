import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import CurrencyList from '../list/CurrencyList'
import SearchArea from '../search/SearchArea'
import { fetchCurrencyList } from '../../service/CurrencyService'

const Home = () => {
  let { currencyFilter } = useParams()
  const [data, setData] = useState()
  const [options, setOptions] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCurrencyList(fetchCallBack, currencyFilter)
  }, [currencyFilter])

  const fetchCallBack = (currencyList, selectionList) => {
    setData(currencyList)
    setOptions(selectionList)
    setLoading(false)
  }

  if (loading) {
    return <div className='text-center mt-5'>Fetching data...</div>
  }

  return (
    <div id='app-container'>
      <Header />
      <SearchArea options={options} selectedOptions={currencyFilter} />
      {data ? <CurrencyList data={data} /> : <div className='text-center'>No data available</div>}
    </div>
  )
}

export default Home
