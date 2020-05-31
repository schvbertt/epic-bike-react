import React from 'react'
import CookieConsent from "react-cookie-consent";

// ICONS
import {FaCookie} from 'react-icons/fa'

export default function Cookies() {
    return (
        <>
        <CookieConsent
        disableStyles={true}
        cookieName="Epic Bike Cookie"
        buttonText="Akceptuj"
        location='bottom'
        buttonClasses="cookies-button"
        containerClasses="cookies"
        contentClasses="cookies-text"
        >
          <div>
            <FaCookie className='cookies-icon' />
          </div>
          <p>
            Używamy Cookies dla Twojej wygody
          </p>
        </CookieConsent>
        </>
    )
}
