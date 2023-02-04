import {
  BrowserRouter as Router, Switch,
  Route,

} from 'react-router-dom'
import CurrencyPage from './components/CurrencyPage'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:currencyFilter?" children={<CurrencyPage />} />
      </Switch>
    </Router>
  )
}


export default App