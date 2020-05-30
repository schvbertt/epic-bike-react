import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

// ICONS
import {FaBicycle} from 'react-icons/fa'
import {FaAngleDoubleDown} from 'react-icons/fa'

// IMAGES
import Image1 from '../img/service-images/bike-service.jpg'

export default function MobileService() {

    return (
        <>
        <Col>
            <div className='icon-styles'>
                <a href='#rower' className='iconed'>
                    <FaBicycle size={55} />
                </a>
                <p>ROWER</p>
            </div>
        </Col>
        <Col>
            <div className='icon-styles'>
                <a href='#zawieszenie' className='iconed'>
                    <FaAngleDoubleDown size={55} />
                </a>
                <p>ZAWIESZENIE</p>
            </div>
        </Col>
        </>
    )
}
