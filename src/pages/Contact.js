import React, {useEffect} from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// ICONS
import {FaPhone} from 'react-icons/fa'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <HelmetProvider>
        <Helmet>
            <title>Epic Bike - Kontakt</title>
        </Helmet>
        </HelmetProvider>
        <div className='blank-div' />
        <Container className='fix-top'>
            <Row className='animatedDown fadeInDown'>
                <Col md={12}>
                    <div>
                    <h1 className='h4 text-center text-white'>
                        <FaPhone size={33} className='custom-phone' />
                        KONTAKT
                    </h1>
                    </div>
                    <div className='border-block' />
                </Col>
            </Row>
            <Row className='animatedUp fadeInUp mt-3'>
                <Col md={6}>
                <div>
                    <p className='text-center text-white'>
                    <strong>
                        EPIC BIKE
                    </strong>
                    <br />
                        ul. Cieszyńska 362
                    <br />
                        43-382&nbsp;
                    <strong>
                        Bielsko-Biała
                    </strong>
                    <br />
                    &nbsp;+48 513 313 987
                    </p>
                </div>
                </Col>

                <Col md={6} className='mt-lg-0 mt-md-5 mt-sm-5 mt-5'>
                <div>
                <iframe className='w-100' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.803389163793!2d18.986015315591125!3d49.80856387939205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a0504ea67e97%3A0x773caae2ec15528d!2sCieszy%C5%84ska%20362%2C%2043-303%20Bielsko-Bia%C5%82a!5e0!3m2!1spl!2spl!4v1586178453993!5m2!1spl!2spl" width="600" height="450" frameBorder="0" style={{border: '0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
