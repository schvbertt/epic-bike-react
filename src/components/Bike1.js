import React from 'react'
import ServiceList from '../components/ServiceList'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'


export default function Bike1() {
    return (
        <>
        <Card>
        <Card.Header>
            <strong>PRZEGLĄD OGÓLNY</strong>
        </Card.Header>
            <Card.Body>
                <div className='text-center'>
                    <Badge variant='secondary' className='head-service'>
                        W skład przeglądu <span>OGÓLNEGO</span> wchodzi:
                    </Badge>
                </div>

                <div className='items-inside'>
                <div className='mt-4'>
                    <ServiceList />
                </div>

                <div className='text-center mt-4'>
                    <Badge variant='success' className='price'>
                        100 zł
                    </Badge>
                </div>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}
