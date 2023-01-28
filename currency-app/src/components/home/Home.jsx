import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import CurrencyList from '../list/CurrencyList'
import SearchBar from '../search/SearchBar'
import { fetchCurrencyList } from '../service/CurrencyService'

const Home = () => {
  let { currency } = useParams()
  const [data, setData] = useState()

  useEffect(() => {
    fetchCurrencyList(fetchCallBack)
  }, [])

  const fetchCallBack = (currencyList) => {
    setData(currencyList)
  }

  return (
    <div id='app-container'>
      <Header />
      <SearchBar />
      <CurrencyList data={data} />
    </div>
  )
}

export default Home
