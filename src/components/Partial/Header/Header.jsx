import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.scss';

import { ROUTES } from '../../../routes';
import { Navbar } from '../../Navbar/Navbar';
import { Logo } from '../../../components_UI';

export function Header() {
    const navigate = useNavigate()
    return (
        <header className='header'>
            <div className="header__container _container">
                <Logo
                    className='header__logo'
                    onClick={() => navigate(ROUTES.MAIN)}
                >
                    LOGO
                </Logo>
                <Navbar />
            </div>
        </header>
    )
}
