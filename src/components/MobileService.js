import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import ServiceAlert from '../components/ServiceAlert'

// ICONS
import {FaBicycle} from 'react-icons/fa'
import {FaAngleDoubleDown} from 'react-icons/fa'

// IMAGES
import Image1 from '../img/service-images/bike-service.jpg'

export default function MobileService() {

    return (
        <>
        <Col md={12} className='animatedDown fadeInDown hide-icons'>
            <div className='service-icons1'>
                <a href='#bike' className='iconed1'>
                    <FaBicycle size={55} />
                </a>
                <a href='#sus' className='iconed2'>
                    <FaAngleDoubleDown size={55} />
                </a>
            </div>
        <Row className='mobile-alert mt-4'>
        <ServiceAlert/>
        </Row>
        </Col>
        </>
    )
}
