import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MobileService from '../components/MobileService'
import Service1 from '../components/Service1'
import Service2 from '../components/Service2'
import ServiceAlert from '../components/ServiceAlert'

//ICONS
import {FaWrench} from 'react-icons/fa'


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
            <Row className='mt-4 animatedDown fadeInDown hide-icons'>
                <MobileService />
            </Row>
            <Row className='mobile-alert mt-4'>
                <ServiceAlert />
            </Row>
            <Row className='mt-4 animatedUp fadeInUp'>
            {/* BIKE */}
                <Service1 />
            {/* SUSPENSION */}
                <Service2 />
            </Row>
            <Row className='mt-4 hide-alert'>
                <ServiceAlert />
            </Row>
        </Container>
        </>
    )
}
