import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './StartRaiting.module.scss'

import { ROUTES } from '../../routes';
import { Context } from '../../HOC';

export const StarsRating = ({ rating }) => {
    const navigate = useNavigate()
    const { authContext: { isLogin } } = useContext(Context)

    const handleChangeStars = () => {
        if (isLogin) {
            alert("change stars")
        } else {
            !!window.confirm("You must Login, You want it?") && navigate(ROUTES.LOGIN)
        }
    }

    return (
        <div className={styles.rating}
            onClick={handleChangeStars}
        >
            <div className={styles.rating_stars}>
                <div className={styles.rating_stars_back}>
                    {[...Array(10)].map((_, index) => (
                        <span key={index} />
                    ))}
                </div>
                <div
                    className={styles.rating_stars_fill}
                    style={{ width: `${Math.round(rating * 5) * 2}%` }}
                >
                    {[...Array(10)].map((_, index) => (
                        <span key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
