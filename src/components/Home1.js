import React from 'react'
import Col from 'react-bootstrap/Col'

// ICONS
import {BsWrench} from 'react-icons/bs'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {MdDirectionsBike} from 'react-icons/md'

export default function Home1() {
    return (
        <>
        {/* ICON 1 */}
        <Col sm={4} className='home-icons'>
            <MdDirectionsBike className='home-icons1'/>
            <p><strong>PROFESJONALNA<br />DIAGNOZA</strong></p>
        </Col>

        {/* ICON 2 */}
        <Col sm={4} className='home-icons'>
            <BsWrench className='home-icons1'/>
            <p><strong>WIELOLETNIE<br />DOŚWIADCZENIE</strong></p>
        </Col>

        {/* ICON 3 */}
        <Col sm={4} className='home-icons'>
            <AiOutlineFieldTime className='home-icons1'/>
            <p><strong>DOGODNE<br />TERMINY</strong></p>
        </Col>
        </>
    )
}
