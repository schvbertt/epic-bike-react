import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

// ICONS
import {FaAngleDoubleDown} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'

export default function Suspension1() {
    return (
        <>
        <Card>
        <Card.Header>
            <strong>SERWIS AMORTYZACJI</strong>
        </Card.Header>
            <Card.Body>
                <div className='text-center'>
                    <Badge variant='secondary' className='head-service'>
                        Serwis amortyzacji przedniej <span>KAŻDEGO PRODUCENTA</span>:
                    </Badge>
                </div>

                <div className='items-inside'>
                <div className='text-center'>
                    <p className='price title-height'>
                        <FaAngleDoubleDown size={20} className='custom-angle' />
                        Amortyzacja przednia:
                    </p>
                </div>

                <div className='mt-4'>
                    <ul className='custom-list'>
                        <li><TiTick className='custom-bullet' />
                        Amortyzatory przednie olej-powietrze
                        </li>
                        <li><TiTick className='custom-bullet' />
                        Amortyzatory przednie olej-sprężyna 
                        </li>
                    </ul>
                </div>

                <div className='text-center mt-4'>
                    <div>
                    <span>Jednopółkowy - </span>
                    <Badge variant='success' className='price'>
                        120 - 180 zł
                    </Badge>
                    </div>
                    <div className='mt-2 ml-2'>
                    <span>Dwupółkowy - </span>
                    <Badge variant='success' className='price'>
                        150 - 230 zł
                    </Badge>
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <p className='price title-height'>
                        <FaAngleDoubleDown size={20} className='custom-angle' />
                        Amortyzacja tylnia (dampery):
                    </p>
                </div>

                <div className='mt-4'>
                    <ul className='custom-list'>
                        <li><TiTick className='custom-bullet' />
                        Dampery sprężynowe
                        </li>
                        <li><TiTick className='custom-bullet' />
                        Dampery powietrzne 
                        </li>
                    </ul>
                </div>

                <div className='text-center mt-4'>
                    <Badge variant='success' className='price'>
                        200 - 300 zł
                    </Badge>
                </div>

                <div className='mt-4'>
                    <Alert className='custom-alert text-center'>
                        <strong>Podane powyżej widełki cenowe są zależne od typu roweru</strong>
                    </Alert>
                </div>

                </div>
            </Card.Body>
        </Card>
        </>
    )
}
