import React from 'react'
import ServiceList from '../components/ServiceList'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

// ICONS
import {FaExclamation, FaPlus} from 'react-icons/fa'
import {TiTick} from 'react-icons/ti'


export default function Bike2() {
    return (
        <>
        <Card className='mt-4'>
        <Card.Header>
            <strong>PRZEGLĄD CAŁOŚCIOWY</strong>
        </Card.Header>
            <Card.Body>
                <div className='text-center'>
                    <Badge variant='secondary' className='head-service'>
                        W skład przeglądu <span>CAŁOŚCIOWEGO</span> wchodzi:
                    </Badge>
                </div>

                <div className='items-inside'>
                    <div className='text-center'>
                    <p className='price title-height'>
                        <FaExclamation className='custom-exc' size={20}/>
                        Wszystkie usługi z serwisu ogólnego, czyli:
                    </p>
                    </div>

                    <div className='mt-4'>
                        <ServiceList />
                    </div>

                    <div className='text-center mt-4'>
                    <p className='price title-height'>
                        <FaPlus className='custom-plus' size={20} />
                        Dodatkowo:
                    </p>
                    </div>

                    <div>
                        <ul className='custom-list'>
                            <li><TiTick className='custom-bullet' />
                            Rozebranie roweru na elementy pierwsze (wyczyszczenie i ponowne nasmarowanie)
                            </li>
                            <li><TiTick className='custom-bullet' />
                            Konserwacja piast
                            </li>
                            <li><TiTick className='custom-bullet' />
                            Konserwacja sterów
                            </li>
                            <li><TiTick className='custom-bullet' />
                            Konserwacja suportu
                            </li>
                            <li><TiTick className='custom-bullet' />
                            Pełne wyczyszczenie napędu
                            </li>
                            <li><TiTick className='custom-bullet' />
                            Indywidualne przygotowanie roweru pod klienta
                            </li>
                        </ul>
                    </div>

                    <div className='text-center mt-4'>
                        <Badge variant='success' className='price'>
                            150 - 200 zł
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
