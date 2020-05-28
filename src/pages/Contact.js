import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'
// IMAGES 
import ContactTip from '../img/contact-images/contact-img.jpg'
// ICONS
import {FaPhone} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsClockFill} from 'react-icons/bs'

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'Epic Bike - Kontakt'
      }, [])
    return (
        <>
        <div className='blank-div' />
        <Container className='fix-top'>
            <Row className='animatedDown fadeInDown'>
                <Col md={12}>
                    <div>
                    <h1 className='heading-text text-center text-white'>
                        <FaPhone size={30} className='custom-icon' />
                        <strong>KONTAKT</strong>
                    </h1>
                    </div>
                    <div className='border-block' />
                </Col>
            </Row>
            <Row className='animatedUp fadeInUp mt-3'>
                <Col lg={6}>
                <div className='main-block-text'>
                    {/* INFO1 */}
                    <div className='textc1'>
                        <MdLocationOn size={40} className='icon-contact1' />
                        <div className='text-contact'>
                            <span>
                            <strong>
                                EPIC BIKE
                            </strong>
                            </span>
                            <br />
                            <span>
                                ul. Cieszyńska 362
                            </span>
                            <br />
                            <span>
                                43-382&nbsp;
                            <strong>
                                Bielsko-Biała
                            </strong>
                            </span>
                            <br />
                            <span>
                            +48 513 313 987
                            </span>
                            <br />
                            <p>
                            <strong>NIP: </strong>937-25-37-043
                            </p>
                        </div>
                    </div>
                    {/* INFO2 */}
                    <div className='textc2'>
                        <BsClockFill size={40} className='icon-contact2' />
                        
                        <div className='text-contact'>
                            <span className='open-hours'>
                                <strong>GODZINY OTWARCIA:</strong>
                            </span><br />
                            <div className='text-distance1'>
                            Poniedziałek - piątek: <Badge variant='warning opening'>10 - 18</Badge><br />
                            Sobota: <Badge variant='warning opening'>9 - 14</Badge><br />
                            Niedziela: <Badge variant='warning opening'>NIECZYNNE</Badge>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>

                <Col lg={6} className='mt-lg-0 mt-md-5 mt-sm-5 mt-5'>
                    <Image thumbnail src={ContactTip} className='contact-img' alt='kontakt epic-bike' />
                </Col>
            </Row>
            <Row className='map-distance animatedUp fadeInUp'>
                <Col md={{span: 12, offset: 0}}>
                <iframe 
                className='map'
                title='map' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.803389163793!2d18.986015315591125!3d49.80856387939205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a0504ea67e97%3A0x773caae2ec15528d!2sCieszy%C5%84ska%20362%2C%2043-303%20Bielsko-Bia%C5%82a!5e0!3m2!1spl!2spl!4v1586178453993!5m2!1spl!2spl" 
                frameBorder="0" 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"></iframe>
                </Col>
            </Row>
        </Container>
        </>
    )
}
