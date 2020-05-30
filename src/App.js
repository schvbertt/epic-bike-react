import React from 'react'
import {Route, Switch} from 'react-router-dom'
import CookieConsent from "react-cookie-consent";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// ICONS
import {FaCookie} from 'react-icons/fa'

import Navi from './components/Navi'
import Footer from './components/Footer'

import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'


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
      {/* COOKIES */}
        <CookieConsent
        disableStyles={true}
        cookieName="Epic Bike Cookie"
        buttonText="Akceptuj"
        location='bottom'
        buttonClasses="cookies-button"
        containerClasses="cookies"
        contentClasses="cookies-text"
        >
          <FaCookie className='cookies-icon' /> Używamy Cookies dla Twojej wygody
        </CookieConsent>
      {/* END OF COOKIES */}
    </>
  );
}

export default App;
