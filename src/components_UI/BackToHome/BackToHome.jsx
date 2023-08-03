import React from 'react'
import { useNavigate } from 'react-router-dom';

import './BackToHome.scss'

import { ROUTES } from '../../routes'

export function BackToHome({ styles, ...rest }) {

    const navigate = useNavigate()
    return (
        <span
            style={{ ...styles }}
            className='back-home'
            onClick={() => navigate(ROUTES.MAIN)}
        >
            back home
        </span>
    )
}
