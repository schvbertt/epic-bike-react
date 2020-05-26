import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

export default function Suspension3() {
    return (
        <>
        <Card className='mt-4'>
        <Card.Header>
            <strong>SERWIS REGULOWANYCH SZTYC</strong>
        </Card.Header>
            <Card.Body>
                <div className='text-center'>
                    <Badge variant='secondary' className='head-service'>
                        Serwis regulowanych sztyc <span>KAŻDEGO TYPU</span>:
                    </Badge>
                </div>

                <div className='items-inside'>
                    <div className='text-center'>
                    <Badge variant='success' className='price'>
                        150 - 250 zł
                    </Badge>
                    </div>
                </div>
            </Card.Body>
        </Card> 
        </>
    )
}
