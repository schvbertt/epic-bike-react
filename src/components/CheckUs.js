import React from 'react'
import Col from 'react-bootstrap/Col'
import {LinkContainer} from 'react-router-bootstrap'
import Alert from 'react-bootstrap/Alert'

export default function CheckUs() {
    return (
        <>
        <Col md={12}>
        <LinkContainer to='/cennik'>
            <Alert variant='success' className='custom-alert3'>
                SPRAWDŹ NASZĄ OFERTĘ
            </Alert>
        </LinkContainer>
        </Col>
        </>
    )
}
