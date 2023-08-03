import React, { useContext } from 'react';

import './Theme.scss';

import { ThemeContext } from '../../HOC';

export const Theme = () => {
    const { isTheme, handletoggleTheme } = useContext(ThemeContext)
    console.log(isTheme);
    return (
        <div className='btn-theme-wrap'>
            <button
                className="btn__change-theme"
                onClick={() => handletoggleTheme()}
            >
                <span className="btn__text">Theme</span>
            </button>
        </div>
    )
}
