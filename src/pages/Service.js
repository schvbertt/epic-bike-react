import React from 'react'
import {Helmet, HelmetProvider} from "react-helmet-async"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

import Bike1 from '../components/Bike1'
import Bike2 from '../components/Bike2'
import Suspension1 from '../components/Suspension1'
import Suspension2 from '../components/Suspension2'
import Suspension3 from '../components/Suspension3'

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
            <Col lg={6}>
            <div className='h5 d-block text-center text-white'>
                <FaBicycle size={115} />
                <p>ROWER</p>
            </div>
            <Bike1 />
            <Bike2 />
            </Col>

            {/* SUSPENSION */}
            <Col lg={6}>
            <div className='h5 d-block text-center text-white icon-fix'>
                <FaAngleDoubleDown size={115} />
                <FaAngleDoubleDown size={115} />
                <p>ZAWIESZENIE</p>
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
