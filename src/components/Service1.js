import React from 'react'
import Col from 'react-bootstrap/Col' 
import Image from 'react-bootstrap/Image'

import Bike1 from '../components/Bike1'
import Bike2 from '../components/Bike2'

// IMAGES
import Image1 from '../img/service-images/bike-service.jpg'

// ICONS
import {FaBicycle} from 'react-icons/fa'

export default function Service1() {
    return (
        <>
        <Col lg={6} id='rower'>
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
        </>
    )
}
