import React from 'react';

import './Navbar.scss';

import { Theme } from '../../components_UI';
import { NavList } from './NavList/NavList';
import { NavUserInfo } from '../NavUserInfo/NavUserInfo';


export const Navbar = () => {
    return (
        <>
            <NavList />
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginLeft: "auto"
                }}
            >
                <Theme />
                <NavUserInfo />
            </div>
        </>
    )
}
