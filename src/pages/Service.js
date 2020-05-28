import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Image from 'react-bootstrap/Image'

import Bike1 from '../components/Bike1'
import Bike2 from '../components/Bike2'
import Suspension1 from '../components/Suspension1'
import Suspension2 from '../components/Suspension2'
import Suspension3 from '../components/Suspension3'

// IMAGES
import Image1 from '../img/service-images/bike-service.jpg'
import Image2 from '../img/service-images/sus-service.jpg'

//ICONS
import {FaWrench, FaBicycle, FaAngleDoubleDown} from 'react-icons/fa'


export default function Service() {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Epic Bike - Cennik'
      }, [])
    return (
        <>
        <div className='blank-div' />
        <Container className='fix-top'>
            <Row className='animatedDown fadeInDown'>
                <Col md={12}>
                    <div>
                    <h1 className='heading-text text-center text-white'>
                        <FaWrench size={30} className='custom-icon' />
                        <strong>CENNIK SERWISOWY</strong>
                    </h1>
                    </div>
                    <div className='border-block' />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                <div className='service-icons1'>
                    <a href='#bike' className='iconed1'>
                    </a>
                    <a href='#sus' className='iconed1'>
                    </a>
                </div>
                </Col>
            </Row>
            <Row className='animatedUp fadeInUp mt-3'>
            {/* BIKE */}
            <Col lg={6}>
            <div className='d-block text-center text-white'>
                <Image src={Image1} thumbnail className='service-images' alt='serwis roweru' />
                <h2 className='supertext'>
                    <FaBicycle size={30} className='service-icons-left' />
                    <strong>ROWER</strong>
                </h2>
            </div>
            <Bike1 />
            <Bike2 />
            </Col>
            {/* SUSPENSION */}
            <Col lg={6} id='sus'>
            <div className='d-block text-center text-white icon-fix'>
                <Image src={Image2} thumbnail className='service-images' alt='serwis amortyzacji i zawieszenia' />
                <h2 className='supertext'>
                    <FaAngleDoubleDown size={30} className='service-icons-left'/>
                    <strong>ZAWIESZENIE</strong>
                </h2>
            </div>
            <Suspension1 />
            <Suspension2 />
            <Suspension3 />
            </Col>
            </Row>
            <Row className='mt-4 animatedUp fadeInUp'>
                <Alert variant='warning' className='text-center custom-alert2'>
                    KAŻDĄ INNĄ NAPRAWĄ ZAJMUJEMY SIĘ OD RĘKI
                </Alert>
            </Row>
        </Container>
        </>
    )
}
