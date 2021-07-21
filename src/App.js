import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/HomePage'
import Cards from './components/Cards'

import About from './components/about/about'
import Farmers from './components/farmers/MainFarmers'
import Forums from './components/forums/MainForums'
import Resources from './components/resources/resources'
import Markets from './components/markets/markets'
import Footer from "./components/Footer/Footer"
import Volun from "./components/Volunteer/Volunteer"
import FarmV from "./components/Volunteer/FarmV"
// import Auth from './components/auth/Auth'
 
function App() {
  return (
    <>
    <Router>
        <Navbar /> 
        <Switch> 
          <Route path="/" exact component={Cards} /> 
          <Route path="/about" exact component={About} /> 
          <Route path="/farmers" exact component={Farmers} /> 
          <Route path="/forums" exact component={Forums} /> 
          <Route path="/markets" exact component={Markets} /> 
          <Route path="/resources" exact component={Resources} /> 
          {/* <Route path="/Products" exact component={Volun} />  */}
          <Route path="/Volunteer" exact component={Volun} /> 
          <Route path="/FarmV" exact component={FarmV} /> 
        </Switch>
<div>
  <Footer />
</div>

    </Router>

    </>


    

      

    
  );
} 

export default App;