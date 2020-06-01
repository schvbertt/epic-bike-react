import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

// IMAGES
import Logo from '../img/logo-transparent.png'
import Texture from '../img/texture.png'


export default function Navi() {
    const hamburgerClose = () => {
        const hamburgerIcon = document.querySelector('.hamburger')
        hamburgerIcon.classList.toggle('is-active')
    }
    return (
        <>
        <Navbar expand='xl' collapseOnSelect={true} fixed='top' className='animatedDownNavbar fadeInDownNavbar'>
            {/* LOGO */}
            <LinkContainer to='/'>
                <Navbar.Brand className='d-flex fix-logo'>
                    <img src={Logo} alt='logo' className='logo' />
                </Navbar.Brand>
            </LinkContainer>
            {/* HAMBURGER */}
            <Navbar.Toggle aria-controls='navbar'>
                <div onClick={hamburgerClose} className="hamburger hamburger--3dxy">
                    <div className="hamburger-box">
                    <div className="hamburger-inner">
                    </div>
                    </div>
                </div>
            </Navbar.Toggle>
            {/* NAVI LINKS */}
            <Navbar.Collapse id='navbar'>
                <Nav className='text-center align-items-center ml-auto align-menu'>
                    <LinkContainer onClick={hamburgerClose} exact to='/' activeClassName='active-item'>
                        <Nav.Link 
                        className='link-1'>
                            <span className='menu-font'>STRONA GŁÓWNA</span>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer onClick={hamburgerClose} exact to='/cennik' activeClassName='active-item'>
                        <Nav.Link 
                        className='link-2'>
                            <span className='menu-font'>CENNIK</span>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer onClick={hamburgerClose} exact to='/galeria' activeClassName='active-item'>
                        <Nav.Link 
                        className='link-3'>
                            <span className='menu-font'>GALERIA</span>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer onClick={hamburgerClose} exact to='/kontakt' activeClassName='active-item'>
                        <Nav.Link 
                        className='link-4'>
                            <span className='menu-font'>KONTAKT</span>
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}
