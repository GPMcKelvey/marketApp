import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFarm from './componenets/farmers/AddFarm'
import Farm from './componenets/farmers/FarmCarousel'
import Button from './componenets/farmers/Button'
import FarmersHeader from './componenets/farmers/FarmersHeader'
import Farms from './componenets/farmers/Farms'
import MainFarmers from './componenets/farmers/MainFarmers'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
