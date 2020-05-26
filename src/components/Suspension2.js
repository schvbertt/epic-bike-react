import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

// ICONS
import {TiTick} from 'react-icons/ti'

export default function Suspension2() {
    return (
        <>
        <Card className='mt-4'>
        <Card.Header>
            <strong>SERWIS ZAWIESZENIA</strong>
        </Card.Header>
            <Card.Body>
                <div className='text-center'>
                    <Badge variant='secondary' className='head-service'>
                        Serwis zawieszenia <span>KAŻDEGO TYPU</span>:
                    </Badge>
                </div>

                <div className='items-inside'>
                <div className='mt-4'>
                    <ul className='custom-list'>
                        <li><TiTick className='custom-bullet' />
                        Konserwacja łożysk
                        </li>
                    </ul>
                </div>

                <div className='text-center mt-4'>
                    <Badge variant='success' className='price mr-1'>
                        10 zł
                    </Badge>
                    na jeden punkt zawieszenia
                </div>

                <div className='mt-4'>
                    <ul className='custom-list'>
                        <li><TiTick className='custom-bullet' />
                        Wymiana łożysk
                        </li>
                    </ul>
                </div>

                <div className='text-center mt-4'>
                    <Badge variant='success' className='price mr-1'>
                        20 zł
                    </Badge>
                     na jeden punkt zawieszenia + cena łożysk
                </div>
                </div>
            </Card.Body>
        </Card>   
        </>
    )
}
