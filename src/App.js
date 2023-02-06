import { Routes, Route } from "react-router-dom";
import CurrencyPage from './components/CurrencyPage'


/* Using React Router to match '/' to the currecny page. The page has an optional param for filtering. */

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