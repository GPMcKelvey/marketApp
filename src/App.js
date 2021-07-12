<<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './componenets/HomePage'
import MainFarmers from './componenets/farmers/MainFarmers'
import Farms from './componenets/farmers/Farms'
import GreenFarms from './componenets/farmers/GreenFarms';
import MainForums from './componenets/forums/MainForums'
=======
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Cards from './components/Cards'
>>>>>>> 7efeac71556973a304e052a8588970eaf726ef47


// import About from './components/about/about'
import MainFarmers from './components/farmers/MainFarmers'
import MainForums from './components/forums/MainForums'
import Resources from './components/resources/resources'
import Markets from './components/markets/markets'
import Foods from './components/foods/foods'
import Footer from "./components/Footer/Footer"
// import Auth from './components/auth/Auth'
 
function App() {
  return (
<<<<<<< HEAD
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
=======
<div>
    <Router>
        <Navbar /> 
        <Switch> 
          <Route path="/" exact component={Cards} /> 
          <Route path="/farmers" exact component={MainFarmers} /> 
          <Route path="/forums" exact component={MainForums} /> 
          <Route path="/markets" exact component={Markets} /> 
          <Route path="/resources" exact component={Resources} /> 
          <Route path="/foods" exact component={Foods} /> 

        </Switch>
    </Router>
    
  <footer>
    <Footer />
  </footer>
</div>
  
>>>>>>> 7efeac71556973a304e052a8588970eaf726ef47
  );
} 

export default App;