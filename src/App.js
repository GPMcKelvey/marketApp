import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Cards from './components/Cards'


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
  
  );
} 

export default App;