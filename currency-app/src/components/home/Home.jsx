import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import CurrencyList from '../list/CurrencyList'
import SearchBar from '../search/SearchBar'

const Home = () => {
  let { currency } = useParams()

  return (
    <div id='container'>
      <Header />
      <SearchBar />
      <CurrencyList />
    </div>
  )
}

export default Home
