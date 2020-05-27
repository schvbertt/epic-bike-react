import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// IMAGES
import Logo from '../img/logo.png'
import Texture from '../img/texture.png'

// ICONS
// import {FaBars} from 'react-icons/fa'

export default function Navi() {
    const hamburgerClose = () => {
        const hamburgerIcon = document.querySelector('.hamburger')
        if (hamburgerIcon.classList.contains('is-active') === true) {
            hamburgerIcon.classList.remove('is-active')
        } else {
            hamburgerIcon.classList.add('is-active')
        }
    }
    return (
        <>
        <Navbar expand='xl' collapseOnSelect={true} fixed='top' className='animatedDownNavbar fadeInDownNavbar'>
            <LinkContainer to='/'>
                <Navbar.Brand className='d-flex fix-logo'>
                    <img src={Logo} alt='logo' className='logo' />
                </Navbar.Brand>
            </LinkContainer>
                    <div className='positionimg display-logo'>
                        <img src={Texture} className='logo-img' alt='texture'/>
                        <h3 className='logo-img-text'>EPIC LIFE</h3>
                    </div>
            <Navbar.Toggle onClick={hamburgerClose} aria-controls='navbar'>
                {/* <FaBars className='fa-bars' size={30} /> */}
                {/* HAMBURGER */}
                <div class="hamburger hamburger--3dxy">
                    <div class="hamburger-box">
                    <div class="hamburger-inner">
                    </div>
                    </div>
                </div>
            </Navbar.Toggle>
            <Navbar.Collapse id='navbar'>
                <Nav className='text-center align-items-center ml-auto align-menu'>
                    <LinkContainer exact to='/' activeClassName='active-item'>
                        <Nav.Link onClick={hamburgerClose}
                        className='d-flex align-items-center justify-content-center link-fix
                        mb-xl-0 mb-lg-3 mb-md-3 mb-sm-3 mb-3 
                        mt-xl-0 mt-lg-3 mt-md-3 mt-sm-3 mt-4'>
                            <span className='menu-font'>STRONA GŁÓWNA</span>
                            <div className='div-hover' />
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer exact to='/cennik' activeClassName='active-item'>
                        <Nav.Link onClick={hamburgerClose}
                        className='d-flex align-items-center justify-content-center link-fix
                        mb-xl-0 mb-lg-3 mb-md-3 mb-sm-3 mb-3'>
                            <span className='menu-font'>CENNIK</span>
                            <div className='div-hover' />
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer exact to='/kontakt' activeClassName='active-item'>
                        <Nav.Link onClick={hamburgerClose}
                        className='d-flex align-items-center justify-content-center
                        mb-xl-0 mb-lg-3 mb-md-3 mb-sm-3 mb-3'>
                            <span className='menu-font'>KONTAKT</span>
                            <div className='div-hover' />
                        </Nav.Link>
                    </LinkContainer>

                    {/* <Nav.Link href='https://www.facebook.com/Serwis.Epic.Bike/'
                        className='d-flex align-items-center justify-content-center fix-link
                        mb-xl-0 mb-lg-3 mb-md-3 mb-sm-3 mb-3'>
                            <FaFacebookSquare size={30} />
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
