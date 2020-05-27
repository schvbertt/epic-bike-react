import React from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async"
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
    return (
        <>
        <HelmetProvider>
        <Helmet>
            <title>Epic Bike - Cennik</title>
        </Helmet>
        </HelmetProvider>
        <div className='blank-div' />
        <Container className='fix-top'>
            <Row className='animatedDown fadeInDown'>
                <Col md={12}>
                    <div>
                    <h1 className='h4 text-center text-white'>
                        <FaWrench size={33} className='custom-wrench' />
                        CENNIK SERWISOWY
                    </h1>
                    </div>
                    <div className='border-block' />
                </Col>
            </Row>
            <Row className='animatedUp fadeInUp'>
            {/* BIKE */}
            <Col md={6}>
            <div className='d-block text-center text-white'>
                <Image src={Image1} thumbnail className='service-images' alt='bike-service' />
                <p className='supertext'>
                    <FaBicycle />
                    ROWER
                </p>
            </div>
            <Bike1 />
            <Bike2 />
            </Col>

            {/* SUSPENSION */}
            <Col md={6}>
            <div className='d-block text-center text-white icon-fix'>
                <Image src={Image2} thumbnail className='service-images' alt='bike-service' />
                <p className='supertext'>
                    <FaAngleDoubleDown size={25} />
                    ZAWIESZENIE
                </p>
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
