import React from 'react'
import Col from 'react-bootstrap/Col'

// ICONS
import {FaBicycle} from 'react-icons/fa'
import {FaAngleDoubleDown} from 'react-icons/fa'


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
