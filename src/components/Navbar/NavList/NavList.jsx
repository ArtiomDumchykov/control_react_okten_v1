import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavList.scss';

import { ROUTES } from '../../../routes';

const navLinks = [
    {
        linkName: 'Home',
        redirect: ROUTES.MAIN
    },
    {
        linkName: 'movies',
        redirect: ROUTES.MOVIES_LIST
    },
    {
        linkName: 'favorite',
        redirect: ROUTES.FAVORITE
    },
]

export const NavList = () => {
    return (
        <div>
            <nav className="header__nav">
                <ul className="header-nav__list nav-list">
                    {
                        !!navLinks?.length && [...navLinks].map((item, index) => (
                            <li 
                                className='header-nav__item item-nav'
                                key={`${item.linkName}_${index}`}
                            >
                                <NavLink
                                    className='header-nav__item-link link-item-nav'
                                    to={item.redirect}
                                >
                                    <span
                                        className='header-nav-item-link__text text-link-item-nav'
                                    >
                                        {item.linkName}
                                    </span>
                                    <span className='span-line'></span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
