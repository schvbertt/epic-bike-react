import React from 'react'
import {Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Navi from './components/Navi'
import Footer from './components/Footer'

import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Cookies from './pages/Cookies'


function App() {
  return (
    <>
      <Navi />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cennik' component={Service} />
        <Route exact path='/kontakt' component={Contact} />
      </Switch>
      <Footer />
      <Cookies />
    </>
  );
}

export default App;
