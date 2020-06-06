import React from 'react'
import ImageGallery from 'react-image-gallery';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Gallery() {
    
    const images = [
        {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return (
        <>
        <div className='blank-div' />
        <Container className='fix-top'>
        <Row className='animatedDown fadeInDown'>
            <Col md={12}>
                <div>
                <h1 className='heading-text text-center text-white'>
                    <strong>GALERIA</strong>
                </h1>
                </div>
                <div className='border-block' />
            </Col>
        </Row>
        <Row className='mt-4 animatedUp fadeInUp'>
        <Col md={{span: 8, offset: 2}}>
        <ImageGallery 
        items={images}
        lazyLoad={true}
        />
        </Col>
        </Row>
        </Container>
        </>
    )
}
