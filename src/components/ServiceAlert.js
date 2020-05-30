import React from 'react'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'

export default function ServiceAlert() {
    return (
        <>
        <Col md={12} className='animatedDown fadeInDown'>
        <Alert variant='warning' className='text-center custom-alert2'>
            KAŻDĄ INNĄ NAPRAWĄ ZAJMUJEMY SIĘ OD RĘKI
        </Alert>
        </Col>
        </>
    )
}
