import React, { useContext, useState } from 'react';
import { IconContext } from 'react-icons';
import { FaUser } from 'react-icons/fa';
import { Icon } from 'react-icons-kit';
import { ic_person } from 'react-icons-kit/md/ic_person';

import './NavUserInfo.scss';

import { ThemeContext } from '../../HOC'; 
import { UserPanel } from './UserPanel/UserPanel';

export const NavUserInfo = ({ isDarkTheme }) => {
    const [showPanel, setShowPanel] = useState(false);
    const UserIcon = isDarkTheme ? FaUser : ic_person;

    const handleMouseEnter = () => {
        setShowPanel(true);
    };

    const handleMouseLeave = () => {
        setShowPanel(false);
    };

    return (
        <div
            className="nav-user-info"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <IconContext.Provider value={{ color: isDarkTheme ? 'white' : 'black', size: '24' }}>
                <Icon icon={UserIcon} />
            </IconContext.Provider>
            {showPanel && <UserPanel />} {/* Render the UserPanel when showPanel is true */}
        </div>
    );
};
