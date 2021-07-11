import './App.css';
import MainFarmers from './componenets/farmers/MainFarmers'
import HomePage from './componenets/HomePage'
import Farms from './componenets/farmers/Farms'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GreenFarms from './componenets/farmers/GreenFarms';

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
