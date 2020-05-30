import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Suspension1 from '../components/Suspension1'
import Suspension2 from '../components/Suspension2'
import Suspension3 from '../components/Suspension3'

//IMAGES
import Image2 from '../img/service-images/sus-service.jpg'

//ICONS
import {FaAngleDoubleDown} from 'react-icons/fa'

export default function Service2() {
    return (
        <>
        <Col lg={6} id='sus'>
            <div className='d-block text-center text-white'>
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
        </>
    )
}
