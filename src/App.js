import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './componenets/HomePage'
import MainFarmers from './componenets/farmers/MainFarmers'
import Farms from './componenets/farmers/Farms'
import GreenFarms from './componenets/farmers/GreenFarms';
import MainForums from './componenets/forums/MainForums'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/MainFarmers">
              <MainFarmers />
            </Route>
            <Route exact path="/Farms">
              <Farms />
            </Route>
            <Route exact path="/GreenFarms">
              <GreenFarms />
            </Route>
            <Route exact path="/MainForums">
              <MainForums />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
