import {
  BrowserRouter as Router, Switch,
  Route,

} from 'react-router-dom'
import Home from './components/home/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:currency?" children={<Home />} />
      </Switch>
    </Router>
  )
}


export default App