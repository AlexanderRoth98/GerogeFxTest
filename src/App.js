import { Routes, Route } from "react-router-dom";
import CurrencyPage from './components/CurrencyPage'

const App = () => {
  return (
    <div id='app'>
      <Routes>
        <Route path="/:currencyFilter?" element={<CurrencyPage />} />
      </Routes>
    </div>
  )
}

export default App