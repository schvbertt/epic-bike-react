import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// IMAGES
// import RockShox from '../img/logos/rock-shox.png'
// import Marzocchi from '../img/logos/marzocchi.png'
// import Parktool from '../img/logos/parktool.png'
// import Fox from '../img/logos/fox.png'
// import Bos from '../img/logos/bos.png'
// import Dartmoor from '../img/logos/dartmoor.png'

// ICONS
import {FaFacebookSquare, FaPhone} from 'react-icons/fa'

export default function custom() {
    return (
        <>
        <Container fluid className='footer mt-5 mb-4 animatedUp fadeInUp'>
            <Container>
            <Row>
                <Col md={6}>
                    {/* <Container className='text-center mt-3'>
                        <Row className='align-items-center justify-content-center'>
                            <img src={Fox} alt='fox' />
                            <img src={RockShox} alt='Rock-Shox' />
                            <img src={Marzocchi} alt='Marzocchi' />
                        </Row>
                        <Row className='align-items-center justify-content-center'>
                            <img src={Bos} alt='Bos' />
                            <img src={Parktool} alt='Parktool' />
                            <img src={Dartmoor} alt='Dartmoor' />
                        </Row>
                    </Container> */}
                </Col>
                <Col md={3} className='text-center mt-3'>
                    <p className='h5'>GODZINY OTWARCIA</p>
                    <hr className='custom-hr'/>
                    <div className='open-hours1'>
                        <span>
                            Poniedziałek: 10 - 18
                            <br />
                            Wtorek: 10 - 18
                            <br />
                            Środa: 10 - 18
                            <br />
                            Czwartek: 10 - 18
                            <br />
                            Piątek: 10 - 18
                            <br />
                            Sobota: 9 - 14
                            <br />
                            Niedziela: NIECZYNNE
                        </span>
                    </div>
                </Col>
                <Col md={3} className='text-center mt-3'>
                    <p className='h5'>KONTAKT</p>
                    <hr className='custom-hr'/>
                    <span className='text-center contactt'>
                    <span>
                    <strong>
                        EPIC BIKE
                    </strong>
                    <br />
                        ul. Cieszyńska 362
                    <br />
                        43-382&nbsp;
                    <strong>
                        Bielsko-Biała
                    </strong>
                    <br />
                    <FaPhone />
                    &nbsp;+48 513 313 987
                    <br />
                    </span>
                    </span>
                </Col>
            </Row>
            <hr className='custom-hr'/>
            <Row>
                <Col md={8}>
                    <p>Copyright @ 2020 All Rights Reserved by Epic Bike company.</p>
                </Col>
                <Col md={4} className='ml-auto text-center'>
                    <strong>SOCIAL MEDIA</strong>
                    <a href='https://www.facebook.com/Serwis.Epic.Bike/'>
                        <FaFacebookSquare size={24} className='social-media ml-3' />
                    </a>
                </Col>
            </Row>
            </Container>
        </Container>
        </>
    )
}
