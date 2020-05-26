import React from 'react'

// ICONS
import {TiTick} from 'react-icons/ti'

export default function ServiceList() {
    return (
        <>
        <ul className='custom-list'>
            <li><TiTick className='custom-bullet' />
            Centrowanie kół
            </li>
            <li><TiTick className='custom-bullet' />
            Sprawdzenie wszystkich połączeń gwintowych
            </li>
            <li><TiTick className='custom-bullet' />
            Regulacja hamulców
            </li>
            <li><TiTick className='custom-bullet' />
            Regulacja przerzutek
            </li>
            <li><TiTick className='custom-bullet' />
            Ogólne wyczyszczenie napędu oraz ponowne nasmarowanie
            </li>
            <li><TiTick className='custom-bullet' />
            Zewnętrzna konserwacja amortyzacji
            </li>
            <li><TiTick className='custom-bullet' />
            Ogólne wyczyszczenie roweru (drobny detailing)</li>
            <li><TiTick className='custom-bullet' />
            Ewentualne wymiany akcesoriów
            </li>
        </ul>    
        </>
    )
}
